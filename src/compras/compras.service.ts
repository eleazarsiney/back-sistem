import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompraAndProductoDto } from './create-compra.dto';
import { FiltrarComprasDto } from './fechaFilter.dto';
import { Producto } from 'generated/prisma';
import { SseService } from 'src/sse/sse.service';

@Injectable()
export class ComprasService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly sseService: SseService,
    ) { }

    async RegistarNuevaCompra(data: CreateCompraAndProductoDto) {
        try {
            const result = await this.prisma.$transaction(async (prisma) => {
                const ultimaCompra = await prisma.compra.findFirst({
                    orderBy: { correlativo: 'desc' },
                    select: { correlativo: true }
                });

                const nuevoCorrelativo = (ultimaCompra?.correlativo ?? 0) + 1;

                const compra = await prisma.compra.create({
                    data: {
                        Proveedor: data.proveedor,
                        proveedorId: data.proveedorId,
                        observaciones: data.observaciones,
                        Comprador: data.comprador,
                        visitador: data.visitador,
                        correlativo: nuevoCorrelativo,
                        estado: data.estado,
                        fecha: new Date(`${data.fecha}T00:00:00.000Z`),
                        total: data.total,
                    }
                });

                for (const producto of data.listaProductosCompra) {
                    const productoEnBD = await prisma.producto.findUnique({
                        where: { id: producto.productoId }
                    });

                    if (productoEnBD) {
                        await prisma.lote.create({
                            data: {
                                fechaVencimiento: new Date(`${producto.fechaDeVencimiento}T00:00:00.000Z`),
                                nombre: producto.nombreProducto,
                                origen: producto.origen,
                                productoId: producto.productoId,
                                compraId: compra.id,
                                stockTotal: producto.cantidad || 0,
                                stockPorCaja: producto.stockPorCaja || producto.cantidad,
                                stockPorBlister: 0,
                            }
                        });

                        await prisma.detalleDeCompras.create({
                            data: {
                                compraId: compra.id,
                                precioCosto: producto.precioCosto,
                                productoId: producto.productoId,
                                cantidad: producto.cantidad,
                                stockPorBlister: producto.stockPorBlister,
                                stockPorCaja: producto.stockPorCaja,
                                fecha: new Date(`${producto.fecha}T00:00:00.000Z`),
                                fechaDeVencimiento: new Date(`${producto.fechaDeVencimiento}T00:00:00.000Z`),
                                origen: producto.origen,
                                nombreProducto: producto.nombreProducto,
                            }
                        });

                        await prisma.producto.update({
                            where: { id: producto.productoId },
                            data: { cantUnidad: { increment: producto.cantidad } }
                        });
                    }
                }
                return { compra };
            });

            this.sseService.emit('compra_creada', {
                id: result.compra.id,
                correlativo: result.compra.correlativo,
                proveedor: result.compra.Proveedor,
                total: result.compra.total,
                estado: result.compra.estado,
                fecha: result.compra.fecha,
            });

            this.sseService.emit('producto_stock_actualizado', {
                motivo: 'compra_registrada',
                compraId: result.compra.id,
            });

            return result;
        } catch (error) {
            console.log("el error es:", error);
            throw new InternalServerErrorException("error al registrar la compra", error);
        }
    }

    async updateCompra(compraId: string, data: CreateCompraAndProductoDto) {
        try {
            const result = await this.prisma.$transaction(async (prisma) => {
                const compraExistente = await prisma.compra.findUnique({
                    where: { id: compraId },
                    include: {
                        Lotes: true,
                        DetalleDeCompras: true
                    }
                });

                if (!compraExistente) {
                    throw new NotFoundException(`Compra con ID ${compraId} no encontrada`);
                }

                const compraActualizada = await prisma.compra.update({
                    where: { id: compraId },
                    data: {
                        Proveedor: data.proveedor,
                        proveedorId: data.proveedorId,
                        observaciones: data.observaciones,
                        Comprador: data.comprador,
                        visitador: data.visitador,
                        estado: data.estado,
                        fecha: new Date(`${data.fecha}T00:00:00.000Z`),
                        total: data.total,
                    }
                });

                for (const producto of data.listaProductosCompra) {
                    const productoEnBD = await prisma.producto.findUnique({
                        where: { id: producto.productoId }
                    });

                    if (!productoEnBD) continue;

                    const detalleExistente = await prisma.detalleDeCompras.findFirst({
                        where: { compraId: compraId, productoId: producto.productoId }
                    });

                    const loteExistente = await prisma.lote.findFirst({
                        where: { compraId: compraId, productoId: producto.productoId }
                    });

                    if (detalleExistente && loteExistente) {
                        if (producto.cantidad === 0) {
                            await prisma.detalleDeCompras.delete({ where: { id: detalleExistente.id } });
                            await prisma.lote.delete({ where: { id: loteExistente.id } });
                            await prisma.producto.update({
                                where: { id: producto.productoId },
                                data: { cantUnidad: { decrement: detalleExistente.cantidad } }
                            });
                        } else {
                            const diferenciaStock = producto.cantidad - detalleExistente.cantidad;

                            const parseFecha = (fecha) => {
                                if (!fecha) return undefined;
                                if (fecha instanceof Date) return fecha;
                                if (typeof fecha === 'string') {
                                    return fecha.includes('T')
                                        ? new Date(fecha)
                                        : new Date(`${fecha}T00:00:00.000Z`);
                                }
                                return undefined;
                            };

                            await prisma.detalleDeCompras.update({
                                where: { id: detalleExistente.id },
                                data: {
                                    cantidad: producto.cantidad,
                                    precioCosto: producto.precioCosto,  // ← agregar esto
                                    stockPorCaja: producto.stockPorCaja,
                                    stockPorBlister: producto.stockPorBlister,
                                    fecha: parseFecha(producto.fecha),
                                    fechaDeVencimiento: parseFecha(producto.fechaDeVencimiento),
                                    origen: producto.origen,
                                    nombreProducto: producto.nombreProducto,
                                }
                            });

                            await prisma.lote.update({
                                where: { id: loteExistente.id },
                                data: {
                                    stockTotal: { increment: diferenciaStock },
                                    stockPorCaja: producto.stockPorCaja || producto.cantidad,
                                    stockPorBlister: producto.stockPorBlister || 0,
                                    nombre: producto.nombreProducto,
                                    origen: producto.origen,
                                    fechaVencimiento: parseFecha(producto.fechaDeVencimiento),
                                }
                            });

                            if (diferenciaStock !== 0) {
                                await prisma.producto.update({
                                    where: { id: producto.productoId },
                                    data: { cantUnidad: { increment: diferenciaStock } }
                                });
                            }
                        }
                    } else if (producto.cantidad > 0) {
                        await prisma.detalleDeCompras.create({
                            data: {
                                compraId: compraId,
                                productoId: producto.productoId,
                                cantidad: producto.cantidad,
                                stockPorBlister: producto.stockPorBlister,
                                precioCosto: producto.precioCosto,
                                stockPorCaja: producto.stockPorCaja,
                                fecha: new Date(`${producto.fecha}T00:00:00.000Z`),
                                fechaDeVencimiento: new Date(`${producto.fechaDeVencimiento}T00:00:00.000Z`),
                                origen: producto.origen,
                                nombreProducto: producto.nombreProducto,
                            }
                        });

                        await prisma.lote.create({
                            data: {
                                fechaVencimiento: new Date(`${producto.fechaDeVencimiento}T00:00:00.000Z`),
                                nombre: producto.nombreProducto,
                                origen: producto.origen,
                                productoId: producto.productoId,
                                compraId: compraId,
                                stockTotal: producto.cantidad || 0,
                                stockPorCaja: producto.stockPorCaja || producto.cantidad,
                                stockPorBlister: producto.stockPorBlister || 0,
                            }
                        });

                        await prisma.producto.update({
                            where: { id: producto.productoId },
                            data: { cantUnidad: { increment: producto.cantidad } }
                        });
                    }
                }

                const productosIdsActualizados = data.listaProductosCompra
                    .map(p => p.productoId)
                    .filter(id => id);

                const detallesAEliminar = await prisma.detalleDeCompras.findMany({
                    where: {
                        compraId: compraId,
                        NOT: { productoId: { in: productosIdsActualizados } }
                    }
                });

                const lotesAEliminar = await prisma.lote.findMany({
                    where: {
                        compraId: compraId,
                        NOT: { productoId: { in: productosIdsActualizados } }
                    }
                });

                for (const detalle of detallesAEliminar) {
                    await prisma.producto.update({
                        where: { id: detalle.productoId },
                        data: { cantUnidad: { decrement: detalle.cantidad } }
                    });
                    await prisma.detalleDeCompras.delete({ where: { id: detalle.id } });
                }

                for (const lote of lotesAEliminar) {
                    await prisma.lote.delete({ where: { id: lote.id } });
                }

                const nuevosDetalles = await prisma.detalleDeCompras.findMany({
                    where: { compraId: compraId }
                });

                const nuevoTotal = nuevosDetalles.reduce((sum, detalle) => sum + detalle.cantidad, 0);

                await prisma.compra.update({
                    where: { id: compraId },
                    data: { total: nuevoTotal }
                });

                return await prisma.compra.findUnique({
                    where: { id: compraId },
                    include: {
                        DetalleDeCompras: true,
                        Lotes: true,
                        Proveedores: true
                    }
                });
            });

            if (result) {
                this.sseService.emit('compra_actualizada', {
                    id: result.id,
                    correlativo: result.correlativo,
                    proveedor: result.Proveedor,
                    total: result.total,
                    estado: result.estado,
                    fecha: result.fecha,
                });

                this.sseService.emit('producto_stock_actualizado', {
                    motivo: 'compra_actualizada',
                    compraId: result.id,
                });
            }

            return result;
        } catch (error) {
            console.log("el error al actualizar la compra es:", error);
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException("error al actualizar la compra", error);
        }
    }

    // ✅ NUEVO: Eliminar compra completa con devolución de stock y eliminación de lotes
    async eliminarCompraCompleta(compraId: string) {
        const result = await this.prisma.$transaction(async (prs) => {
            // 1. Obtener la compra con todos sus detalles y lotes
            const compra = await prs.compra.findUnique({
                where: { id: compraId },
                include: {
                    DetalleDeCompras: true,
                    Lotes: true,
                },
            });

            if (!compra) throw new NotFoundException(`Compra con ID ${compraId} no encontrada`);

            // 2. Por cada detalle: descontar el stock que se había sumado al comprar
            for (const detalle of compra.DetalleDeCompras) {
                const producto = await prs.producto.findUnique({
                    where: { id: detalle.productoId },
                });

                // Si el producto ya no existe en catálogo, saltar
                if (!producto) continue;

                await prs.producto.update({
                    where: { id: detalle.productoId },
                    data: { cantUnidad: { decrement: detalle.cantidad } },
                });
            }

            // 3. Eliminar los lotes creados por esta compra
            await prs.lote.deleteMany({ where: { compraId } });

            // 4. Eliminar los detalles de la compra
            await prs.detalleDeCompras.deleteMany({ where: { compraId } });

            // 5. Eliminar la compra
            await prs.compra.delete({ where: { id: compraId } });

            return {
                compraId,
                correlativo: compra.correlativo,
                proveedor: compra.Proveedor,
                lotesEliminados: compra.Lotes.length,
                productosRestaurados: compra.DetalleDeCompras.length,
            };
        });

        // ✅ Emitir SSE para actualizar todos los frontends
        this.sseService.emit('compra_eliminada', {
            compraId: result.compraId,
            correlativo: result.correlativo,
            proveedor: result.proveedor,
        });

        // Stock bajó → avisar a LotesModal y ProductosCS
        this.sseService.emit('producto_stock_actualizado', {
            motivo: 'compra_eliminada',
            compraId: result.compraId,
        });

        return result;
    }

    async getProductName(texto: string): Promise<Producto[]> {
        return this.prisma.producto.findMany({
            where: {
                nombre: { contains: texto, mode: 'insensitive' },
            },
            take: 10,
        });
    }

    async FiltrarComprasPorFecha(opciones: FiltrarComprasDto) {
        const fechaInicio = new Date(opciones.fechaInicio);
        const fechaFinal = new Date(opciones.fechaFin);
        fechaFinal.setHours(23, 59, 59);
        return this.prisma.detalleDeCompras.findMany({
            where: {
                fecha: { gte: fechaInicio, lte: fechaFinal }
            },
            orderBy: { fecha: 'desc' }
        });
    }

    async FiltrarPorProveedor(proveedor: string) {
        return this.prisma.compra.findMany({
            where: {
                Proveedor: { equals: proveedor, mode: "insensitive" }
            }
        });
    }

    async filtrarPorEstado(estado: string) {
        return this.prisma.compra.findMany({
            where: {
                estado: { equals: estado, mode: 'insensitive' }
            },
            include: { DetalleDeCompras: true },
            orderBy: { fecha: 'desc' }
        });
    }

    async ObtenerUltimoCorrelativo() {
        const ultimaCompra = await this.prisma.compra.findFirst({
            orderBy: { correlativo: 'desc' },
            select: { correlativo: true }
        });
        return { proximoCorrelativo: (ultimaCompra?.correlativo ?? 0) + 1 };
    }

    async ObtenerTodasLasCompras() {
        return this.prisma.compra.findMany({
            include: {
                DetalleDeCompras: true,
                Lotes: true,
                Proveedores: true
            },
            orderBy: { fecha: 'desc' }
        });
    }

    async ObtenerComprasPorProveedor(proveedorId: string) {
        return this.prisma.compra.findMany({
            where: { proveedorId },
            include: {
                DetalleDeCompras: true,
                Proveedores: true,
            },
            orderBy: { fecha: 'desc' },
        });
    }

    async ObtenerCompraPorId(compraId: string) {
        try {
            const compra = await this.prisma.compra.findUnique({
                where: { id: compraId },
                include: {
                    DetalleDeCompras: true,
                    Lotes: true,
                    Proveedores: true
                }
            });

            if (!compra) {
                throw new NotFoundException(`Compra con ID ${compraId} no encontrada`);
            }

            return compra;
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException("error al obtener la compra", error);
        }
    }
}