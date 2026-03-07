import {
  Injectable,
  InternalServerErrorException,
  BadRequestException,
  NotFoundException
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVentaDto } from './create-venta.dto';
import { SseService } from 'src/sse/sse.service';

@Injectable()
export class VentasService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly sseService: SseService,
  ) { }

  async RegistrarVenta(data: CreateVentaDto) {
    try {
      const ventaRealizada = await this.prisma.$transaction(async (prisma) => {
        const ultimaVenta = await prisma.venta.findFirst({
          orderBy: { correlativo: 'desc' },
          select: { correlativo: true }
        });

        const nuevoCorrelativo = (ultimaVenta?.correlativo ?? 0) + 1;

        const ventaRealizada = await prisma.venta.create({
          data: {
            nombreCliente: data.cliente,
            estado: data.estado,
            clienteId: data.clienteId,
            total: data.total,
            correlativo: nuevoCorrelativo,
            gananciaTotal: data.gananciaTotal,
            fecha: new Date(`${data.fecha}T00:00:00.000Z`),
          },
        });

        for (const product of data.detalles) {
          const productoEnBD = await prisma.producto.findUnique({
            where: { id: product.productoId }
          });

          const productoLote = await prisma.lote.findUnique({
            where: { id: product.loteId },
          });

          if (!productoLote || !productoEnBD) {
            throw new BadRequestException(
              `Producto con ID ${product.productoId} no encontrado.`,
            );
          }

          if (productoLote.stockTotal < product.cantidad) {
            throw new BadRequestException(
              `Stock insuficiente para el producto ${product.nombreProducto}. Stock disponible: ${productoLote.stockTotal}, solicitado: ${product.cantidad}`,
            );
          }

          await prisma.listaProductos.create({
            data: {
              productoId: product.productoId,
              nombreProducto: product.nombreProducto,
              presentacion: product.presentacion,
              cantidad: product.cantidad,
              subGanancia: product.subGanancia,
              fechaDeVencimiento: product.fechaVencimiento ? new Date(product.fechaVencimiento) : null,
              subtotal: product.subtotal,
              loteId: product.loteId,
              venta: {
                connect: { id: ventaRealizada.id },
              },
            },
          });

          if (product.presentacion === 'caja') {
            let resultadoStock = 0;
            if (productoEnBD.cantBlister > 0) {
              const resultadoBlister = productoEnBD.cantCaja * product.cantidad;
              resultadoStock = productoEnBD.cantBlister * resultadoBlister;
            } else {
              resultadoStock = productoEnBD.cantCaja * product.cantidad;
            }

            await prisma.lote.update({
              where: { id: product.loteId },
              data: {
                stockPorCaja: { decrement: product.cantidad },
                ...(productoEnBD.cantBlister > 0 ? { stockPorBlister: { decrement: productoEnBD.cantCaja * product.cantidad } } : {}),
                stockTotal: { decrement: resultadoStock },
              },
            });

            await prisma.producto.update({
              where: { id: product.productoId },
              data: { cantUnidad: { decrement: resultadoStock } }
            });
          }

          if (product.presentacion === 'blister') {
            const totalActualPorBlister = productoLote.stockPorBlister - product.cantidad;
            if (totalActualPorBlister < 0) {
              throw new BadRequestException(
                `Stock insuficiente para el producto ${product.nombreProducto}. Stock disponible: ${productoLote.stockPorBlister}, solicitado: ${product.cantidad}`,
              );
            }
            const decrementCaja = Math.floor(totalActualPorBlister / productoEnBD.cantCaja);
            const unidadesVendidas = productoEnBD.cantBlister * product.cantidad;

            await prisma.lote.update({
              where: { id: product.loteId },
              data: {
                stockPorBlister: { decrement: product.cantidad },
                stockTotal: { decrement: unidadesVendidas },
                ...(decrementCaja >= 0 ? { stockPorCaja: { set: decrementCaja } } : {}),
              },
            });

            await prisma.producto.update({
              where: { id: product.productoId },
              data: { cantUnidad: { decrement: unidadesVendidas } }
            });
          }

          if (product.presentacion === 'unitario') {
            const totalActualUnitario = productoLote.stockTotal - product.cantidad;

            await prisma.lote.update({
              where: { id: product.loteId },
              data: { stockTotal: { decrement: product.cantidad } },
            });

            await prisma.producto.update({
              where: { id: product.productoId },
              data: { cantUnidad: { decrement: product.cantidad } }
            });

            if (totalActualUnitario <= 0) {
              await prisma.lote.delete({ where: { id: product.loteId } });
            }
          }
        }

        return ventaRealizada;
      });

      this.sseService.emit('venta_creada', {
        id: ventaRealizada.id,
        correlativo: ventaRealizada.correlativo,
        nombreCliente: ventaRealizada.nombreCliente,
        total: ventaRealizada.total,
        estado: ventaRealizada.estado,
        fecha: ventaRealizada.fecha,
      });

      return ventaRealizada;

    } catch (error) {
      console.error('Error al registrar la venta:', error);
      throw new InternalServerErrorException('Error al procesar la venta.');
    }
  }

  async ObtenerUltimoCorrelativo() {
    const ultimaVenta = await this.prisma.venta.findFirst({
      orderBy: { correlativo: 'desc' },
      select: { correlativo: true }
    });
    return { proximoCorrelativo: (ultimaVenta?.correlativo ?? 0) + 1 };
  }

  async obtenerTodasLasVentas() {
    return this.prisma.venta.findMany({
      include: {
        detalles: true,
        cliente: {
          select: {
            id: true,
            nombre: true,
            encargado: true,
            telefono: true,
            email: true,
            direccion: true,
          }
        }
      },
      orderBy: { fecha: 'desc' },
    });
  }

  async obtenerVentaPorId(ventaId: string) {
    const venta = await this.prisma.venta.findUnique({
      where: { id: ventaId },
      include: {
        detalles: true,
        cliente: {
          select: {
            id: true,
            nombre: true,
            encargado: true,
            telefono: true,
            email: true,
            direccion: true,
          }
        }
      }
    });
    if (!venta) throw new NotFoundException(`Venta con ID ${ventaId} no encontrada`);
    return venta;
  }

  async obtenerLoVendido() {
    return this.prisma.listaProductos.findMany();
  }

  async borrarTodo() {
    try {
      await this.prisma.pagosRealizadosVentas.deleteMany();
      await this.prisma.listaProductos.deleteMany();
      await this.prisma.venta.deleteMany();
      return { message: 'Todos los datos han sido eliminados' };
    } catch (error) {
      throw new InternalServerErrorException("Error al borrar datos");
    }
  }

  async eliminarProductoVendido(productoVendidoId: string) {
    const result = await this.prisma.$transaction(async (prs) => {
      const productoVendido = await prs.listaProductos.findUnique({
        where: { id: productoVendidoId },
        include: { venta: true }
      });

      if (!productoVendido) throw new BadRequestException('Producto vendido no encontrado');

      const producto = await prs.producto.findUnique({
        where: { id: productoVendido.productoId }
      });

      if (!producto) throw new BadRequestException('Producto no encontrado');

      let unidadesADevolver = 0;

      if (productoVendido.presentacion === 'caja') {
        if (producto.cantBlister > 0) {
          const resultadoBlister = producto.cantCaja * productoVendido.cantidad;
          unidadesADevolver = producto.cantBlister * resultadoBlister;
        } else {
          unidadesADevolver = producto.cantCaja * productoVendido.cantidad;
        }
      } else if (productoVendido.presentacion === 'blister') {
        unidadesADevolver = producto.cantBlister * productoVendido.cantidad;
      } else {
        unidadesADevolver = productoVendido.cantidad;
      }

      await prs.producto.update({
        where: { id: productoVendido.productoId },
        data: { cantUnidad: { increment: unidadesADevolver } }
      });

      await prs.listaProductos.delete({ where: { id: productoVendidoId } });

      const productosRestantes = await prs.listaProductos.findMany({
        where: { ventaId: productoVendido.ventaId }
      });

      const nuevoTotal = productosRestantes.reduce((acc, p) => acc + p.subtotal, 0);
      const nuevaGanancia = productosRestantes.reduce((acc, p) => acc + p.subGanancia, 0);

      await prs.venta.update({
        where: { id: productoVendido.ventaId },
        data: { total: nuevoTotal, gananciaTotal: nuevaGanancia }
      });

      return {
        message: 'Producto eliminado de la venta y stock restaurado correctamente',
        ventaId: productoVendido.ventaId
      };
    });

    this.sseService.emit('venta_producto_eliminado', { ventaId: result.ventaId });

    return result;
  }

  private calcularUnidades(
    presentacion: string,
    cantidad: number,
    cantCaja: number,
    cantBlister: number
  ): number {
    if (presentacion === 'caja') {
      if (cantBlister > 0) {
        return cantBlister * (cantCaja * cantidad);
      }
      return cantCaja * cantidad;
    }
    if (presentacion === 'blister') {
      return cantBlister * cantidad;
    }
    return cantidad;
  }

  private async devolverStockAlLote(
    prs: any,
    loteId: string,
    presentacion: string,
    cantidad: number,
    producto: { cantCaja: number; cantBlister: number }
  ) {
    const unidades = this.calcularUnidades(
      presentacion,
      cantidad,
      producto.cantCaja,
      producto.cantBlister
    );

    await prs.lote.update({
      where: { id: loteId },
      data: { stockTotal: { increment: unidades } },
    });

    return unidades;
  }

  private async descontarStockDelLote(
    prs: any,
    loteId: string,
    presentacion: string,
    cantidad: number,
    producto: { cantCaja: number; cantBlister: number }
  ) {
    const lote = await prs.lote.findUnique({ where: { id: loteId } });
    if (!lote) throw new NotFoundException(`Lote con ID ${loteId} no encontrado`);

    const unidades = this.calcularUnidades(
      presentacion,
      cantidad,
      producto.cantCaja,
      producto.cantBlister
    );

    if (lote.stockTotal < unidades) {
      throw new BadRequestException(
        `Stock insuficiente en el lote destino. Disponible: ${lote.stockTotal}, requerido: ${unidades}`
      );
    }

    await prs.lote.update({
      where: { id: loteId },
      data: { stockTotal: { decrement: unidades } },
    });

    return unidades;
  }

  async EditarVenta(
    ventaId: string,
    data: {
      clienteId?: string | null;
      clienteNombre?: string;
      cliente?: string;
      estado?: string;
      fecha?: string;
      cambios: {
        listaProductoId: string;
        nuevaCantidad: number;
        nuevoLoteId?: string;
        // ✅ Campos para items nuevos (no existen en BD aún)
        esNuevo?: boolean;
        productoId?: string;
        nombreProducto?: string;
        presentacion?: string;
        loteId?: string;
        subtotal?: number;
        subGanancia?: number;
        fechaVencimiento?: string | null;
      }[];
    }
  ) {
    try {
      const ventaActualizada = await this.prisma.$transaction(async (prs) => {
        const productosActuales = await prs.listaProductos.findMany({
          where: { ventaId },
          include: { venta: true }
        });

        const productosMap = new Map(productosActuales.map(p => [p.id, p]));

        for (const item of data.cambios) {

          // ══════════════════════════════════════════════════════════════════
          // ✅ CASO A: Item NUEVO — no existe en BD, hay que crearlo
          // Solo confiar en el flag esNuevo del frontend.
          // No usar !productosMap.has() porque cuando item.id===loteId da falsos positivos
          // ══════════════════════════════════════════════════════════════════
          const esItemNuevo = item.esNuevo === true;

          if (esItemNuevo) {
            // Necesitamos productoId y loteId para crear el item
            const productoId = item.productoId;
            const loteId = item.loteId ?? item.nuevoLoteId;

            if (!productoId || !loteId) {
              throw new BadRequestException(
                `Item nuevo sin productoId o loteId: ${JSON.stringify(item)}`
              );
            }

            const producto = await prs.producto.findUnique({ where: { id: productoId } });
            const lote = await prs.lote.findUnique({ where: { id: loteId } });

            if (!producto) throw new NotFoundException(`Producto ${productoId} no encontrado`);
            if (!lote) throw new NotFoundException(`Lote ${loteId} no encontrado`);

            const presentacion = item.presentacion ?? 'unitario';
            const cantidad = item.nuevaCantidad;

            const unidades = this.calcularUnidades(
              presentacion,
              cantidad,
              producto.cantCaja,
              producto.cantBlister
            );

            if (lote.stockTotal < unidades) {
              throw new BadRequestException(
                `Stock insuficiente para ${producto.nombre}. Disponible: ${lote.stockTotal}, requerido: ${unidades}`
              );
            }

            // Crear el detalle nuevo
            await prs.listaProductos.create({
              data: {
                ventaId,
                productoId,
                loteId,
                nombreProducto: item.nombreProducto ?? producto.nombre,
                presentacion,
                cantidad,
                subtotal: item.subtotal ?? 0,
                subGanancia: item.subGanancia ?? 0,
                fechaDeVencimiento: item.fechaVencimiento ? new Date(item.fechaVencimiento) : null,
              }
            });

            // Descontar stock del lote
            await prs.lote.update({
              where: { id: loteId },
              data: { stockTotal: { decrement: unidades } }
            });

            // Descontar stock del producto
            await prs.producto.update({
              where: { id: productoId },
              data: { cantUnidad: { decrement: unidades } }
            });

            continue;
          }

          // ══════════════════════════════════════════════════════════════════
          // CASO B: Item EXISTENTE — lógica original sin cambios
          // ══════════════════════════════════════════════════════════════════
          const lista = productosMap.get(item.listaProductoId);

          // Guard: si no existe en el mapa y no es nuevo, saltarlo silenciosamente
          // (puede pasar con items de venta nueva donde id===loteId)
          if (!lista) {
            console.warn(`[EditarVenta] Item ${item.listaProductoId} no encontrado en productosMap y esNuevo=false, saltando.`);
            continue;
          }

          const producto = await prs.producto.findUnique({
            where: { id: lista.productoId }
          });
          if (!producto) throw new NotFoundException('Producto no encontrado');

          const loteOriginalId = lista.loteId;
          const hayCambioDeLote = item.nuevoLoteId && item.nuevoLoteId !== loteOriginalId;
          const loteDestinoId = hayCambioDeLote ? item.nuevoLoteId! : loteOriginalId;

          const anterior = lista.cantidad;
          const nueva = item.nuevaCantidad;

          const precioUnitario = lista.subtotal / anterior;
          const gananciaUnitaria = lista.subGanancia / anterior;
          const nuevoSubtotal = precioUnitario * nueva;
          const nuevaSubGanancia = gananciaUnitaria * nueva;

          if (nueva === 0) {
            const unidades = await this.devolverStockAlLote(
              prs, loteOriginalId, lista.presentacion, anterior, producto
            );
            await prs.producto.update({
              where: { id: lista.productoId },
              data: { cantUnidad: { increment: unidades } }
            });
            await prs.listaProductos.delete({ where: { id: lista.id } });
            continue;
          }

          if (hayCambioDeLote) {
            const unidadesDevueltas = await this.devolverStockAlLote(
              prs, loteOriginalId, lista.presentacion, anterior, producto
            );
            const unidadesDescontadas = await this.descontarStockDelLote(
              prs, loteDestinoId, lista.presentacion, nueva, producto
            );
            const loteDestino = await prs.lote.findUnique({
              where: { id: loteDestinoId },
              select: { fechaVencimiento: true }
            });
            const diferenciaCantUnidad = unidadesDevueltas - unidadesDescontadas;
            await prs.producto.update({
              where: { id: lista.productoId },
              data: { cantUnidad: { increment: diferenciaCantUnidad } }
            });
            await prs.listaProductos.update({
              where: { id: lista.id },
              data: {
                cantidad: nueva,
                loteId: loteDestinoId,
                subtotal: nuevoSubtotal,
                subGanancia: nuevaSubGanancia,
                fechaDeVencimiento: loteDestino?.fechaVencimiento ?? null,
              }
            });
            continue;
          }

          const diferencia = nueva - anterior;

          await prs.listaProductos.update({
            where: { id: lista.id },
            data: {
              cantidad: nueva,
              subtotal: nuevoSubtotal,
              subGanancia: nuevaSubGanancia,
            }
          });

          const unidadesAjuste = this.calcularUnidades(
            lista.presentacion,
            Math.abs(diferencia),
            producto.cantCaja,
            producto.cantBlister
          );

          if (diferencia > 0) {
            await prs.lote.update({
              where: { id: loteOriginalId },
              data: { stockTotal: { decrement: unidadesAjuste } }
            });
            await prs.producto.update({
              where: { id: lista.productoId },
              data: { cantUnidad: { decrement: unidadesAjuste } }
            });
          } else if (diferencia < 0) {
            await prs.lote.update({
              where: { id: loteOriginalId },
              data: { stockTotal: { increment: unidadesAjuste } }
            });
            await prs.producto.update({
              where: { id: lista.productoId },
              data: { cantUnidad: { increment: unidadesAjuste } }
            });
          }
        }

        // Recalcular totales de la venta
        const productosFinales = await prs.listaProductos.findMany({
          where: { ventaId }
        });

        const nuevoTotal = productosFinales.reduce((acc, p) => acc + p.subtotal, 0);
        const nuevaGanancia = productosFinales.reduce((acc, p) => acc + p.subGanancia, 0);

        const updateData: any = {
          total: nuevoTotal,
          gananciaTotal: nuevaGanancia,
        };

        if (data.clienteId !== undefined) {
          if (data.clienteId) {
            updateData.cliente = { connect: { id: data.clienteId } };
          } else {
            updateData.cliente = { disconnect: true };
          }
        }

        const nombreCliente = data.clienteNombre ?? (data as any).cliente;
        if (nombreCliente !== undefined) {
          updateData.nombreCliente = nombreCliente;
        }

        if (data.estado !== undefined) {
          updateData.estado = data.estado;
        }

        if (data.fecha !== undefined && data.fecha !== null) {
          if (/^\d{4}-\d{2}-\d{2}$/.test(data.fecha)) {
            updateData.fecha = new Date(`${data.fecha}T00:00:00.000Z`);
          } else {
            const fechaParsed = new Date(data.fecha);
            if (!isNaN(fechaParsed.getTime())) updateData.fecha = fechaParsed;
          }
        }

        return await prs.venta.update({
          where: { id: ventaId },
          data: updateData,
          include: {
            detalles: true,
            cliente: {
              select: {
                id: true,
                nombre: true,
                encargado: true,
                telefono: true,
                email: true,
                direccion: true,
              }
            }
          }
        });
      });

      this.sseService.emit('venta_editada', {
        id: ventaActualizada.id,
        correlativo: ventaActualizada.correlativo,
        nombreCliente: ventaActualizada.nombreCliente,
        total: ventaActualizada.total,
        estado: ventaActualizada.estado,
        fecha: ventaActualizada.fecha,
      });

      return ventaActualizada;

    } catch (error) {
      console.error("Error editando venta:", error);
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException("Error al editar venta");
    }
  }

  async obtenerVentasPorCliente(clienteId: string) {
    return this.prisma.venta.findMany({
      where: { clienteId },
      include: {
        detalles: true,
        cliente: {
          select: {
            id: true,
            nombre: true,
            encargado: true,
            telefono: true,
            email: true,
            direccion: true,
            Departamento: true,
            Municipio: true,
            correlativo: true,
          }
        }
      },
      orderBy: { fecha: 'desc' },
    });
  }

  async eliminarVentaCompleta(ventaId: string) {
    const result = await this.prisma.$transaction(async (prs) => {
      const venta = await prs.venta.findUnique({
        where: { id: ventaId },
        include: { detalles: true },
      });

      if (!venta) throw new NotFoundException(`Venta con ID ${ventaId} no encontrada`);

      for (const detalle of venta.detalles) {
        const producto = await prs.producto.findUnique({
          where: { id: detalle.productoId },
        });

        if (!producto) continue;

        const unidadesADevolver = this.calcularUnidades(
          detalle.presentacion,
          detalle.cantidad,
          producto.cantCaja,
          producto.cantBlister,
        );

        const loteExiste = await prs.lote.findUnique({ where: { id: detalle.loteId } });
        if (loteExiste) {
          await prs.lote.update({
            where: { id: detalle.loteId },
            data: { stockTotal: { increment: unidadesADevolver } },
          });
        }

        await prs.producto.update({
          where: { id: detalle.productoId },
          data: { cantUnidad: { increment: unidadesADevolver } },
        });
      }

      await prs.listaProductos.deleteMany({ where: { ventaId } });

      await prs.pagosRealizadosVentas.deleteMany({
        where: { clienteId: venta.clienteId ?? undefined },
      });

      await prs.venta.delete({ where: { id: ventaId } });

      return {
        ventaId,
        correlativo: venta.correlativo,
        nombreCliente: venta.nombreCliente,
        productosRestaurados: venta.detalles.length,
      };
    });

    this.sseService.emit('venta_eliminada', {
      ventaId: result.ventaId,
      correlativo: result.correlativo,
      nombreCliente: result.nombreCliente,
    });

    this.sseService.emit('producto_stock_actualizado', {
      motivo: 'venta_eliminada',
      ventaId: result.ventaId,
    });

    return result;
  }
}