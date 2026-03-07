import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Producto } from 'generated/prisma';
import { NuevoProductoCompletoDto, PropiedadesNuevoProductoDto } from './updateProduc.dto';
import { SseService } from 'src/sse/sse.service';

@Injectable()
export class ProductsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly sseService: SseService,
  ) { }

  // ── Helper: sincronizar tabla Casas ─────────────────────────────────────────
  // Si ya existe un registro Casas para este producto → actualiza el nombre.
  // Si no existe → crea uno nuevo.
  // Si nombreCasa está vacío o es 'sin definir' → no hace nada.
  private async sincronizarCasa(productoId: string, nombreCasa: string): Promise<void> {
    if (!nombreCasa || nombreCasa.trim() === '' || nombreCasa === 'sin definir') return;

    const casaExistente = await this.prisma.casas.findFirst({
      where: { productoId },
    });

    if (casaExistente) {
      if (casaExistente.nombre !== nombreCasa) {
        await this.prisma.casas.update({
          where: { id: casaExistente.id },
          data: { nombre: nombreCasa },
        });
      }
    } else {
      await this.prisma.casas.create({
        data: { nombre: nombreCasa, productoId },
      });
    }
  }
  // ────────────────────────────────────────────────────────────────────────────

  async RegistrarNuevoProducto(data: NuevoProductoCompletoDto) {
    try {
      const result = await this.prisma.$transaction(async (prisma) => {
        const producto = await prisma.producto.create({
          data: {
            nombre: data.producto.nombre || 'sin definir',
            descripcion: data.producto.descripcion || 'sin definir',
            codigoBarras: data.producto.codigoBarras || null,
            presentacion: data.producto.presentacion || 'sin definir',
            generico: data.producto.generico || 'sin definir',
            gramaje: data.producto.gramaje || 'sin definir',
            costo: data.producto.costo || 0,
            precioVenta: data.producto.precioVenta || 0,
            alertaStock: data.producto.alertaStock || false,
            casa: data.producto.casa || 'sin definir',
            cantUnidad: data.producto.cantUnidad || 0,
            cantCaja: data.producto.cantUnidad || 0,
            cantBlister: data.producto.cantBlister || 0,
            precioUnitario: data.producto.precioUnitario || 0,
            precioBlister: data.producto.precioBlister || 0,
            precioCaja: data.producto.precioUnitario || 0,
            costoCompraUnitario: data.producto.costoCompraUnitario || 0,
            costoCompraBlister: data.producto.costoCompraBlister || 0,
            costoCompraCaja: data.producto.costoCompraUnitario || 0,
          },
        });

        const codigoDeBarrasDb = await prisma.codigoDeBarras.create({
          data: {
            nombre: data.producto.nombre || 'sin definir',
            codigoBarras: data.producto.codigoBarras || null,
            productoId: producto.id,
          },
        });

        await prisma.lote.create({
          data: {
            origen: data.lote.origen || 'sin definir',
            fechaVencimiento: data.lote.fechaVencimiento
              ? new Date(`${data.lote.fechaVencimiento}T00:00:00.000Z`)
              : null,
            stockTotal: data.lote.stockTotal || 0,
            codigoBarrasId: codigoDeBarrasDb.id,
            nombre: data.producto.nombre || 'sin definir',
            stockPorCaja: data.lote.stockTotal || 0,
            stockPorBlister: data.lote.stockPorBlister || 0,
            productoId: producto.id,
            compraId: null,
          },
        });

        // ✅ Crear registro en Casas si el producto tiene casa definida
        if (data.producto.casa && data.producto.casa !== 'sin definir') {
          await prisma.casas.create({
            data: { nombre: data.producto.casa, productoId: producto.id },
          });
        }

        return { producto };
      });

      this.sseService.emit('producto_creado', {
        id: result.producto.id,
        nombre: result.producto.nombre,
        cantUnidad: result.producto.cantUnidad,
        precioVenta: result.producto.precioVenta,
        casa: result.producto.casa,
      });

      return result;
    } catch (error) {
      console.log('el error al guardar un nuevo producto es : ', error);
      return error;
    }
  }

  async getProduct(id: string): Promise<Producto | null> {
    return this.prisma.producto.findUnique({
      where: { id },
      include: {
        lotes: { orderBy: { fechaVencimiento: 'desc' } },
        Casas: true,
      },
    });
  }

  async getProductName(texto: string): Promise<Producto[]> {
    return this.prisma.producto.findMany({
      where: { nombre: { contains: texto, mode: 'insensitive' } },
      include: {
        lotes: { orderBy: { fechaVencimiento: 'desc' } },
        Casas: true,
      },
    });
  }

  async getProductCode(codigo: string): Promise<Producto[]> {
    return this.prisma.producto.findMany({
      where: { codigoBarras: { contains: codigo, mode: 'insensitive' } },
      include: {
        lotes: { orderBy: { fechaVencimiento: 'desc' } },
        Casas: true,
      },
    });
  }

  async getAllCodes(): Promise<Producto[]> {
    return this.prisma.producto.findMany({
      include: {
        lotes: { orderBy: { fechaVencimiento: 'desc' } },
        Casas: true,
      },
    });
  }

  async getProducts(): Promise<Producto[]> {
    return this.prisma.producto.findMany({
      include: {
        lotes: { orderBy: { fechaVencimiento: 'desc' } },
        Casas: true,
      },
    });
  }

  async updateProduct(id: string, data: PropiedadesNuevoProductoDto) {
    const productoActualizado = await this.prisma.producto.update({
      where: { id },
      data: {
        ...data,
        codigoBarras: data.codigoBarras || undefined,
      },
    });

    // ✅ Sincronizar tabla Casas si el campo casa viene en la actualización
    if (data.casa !== undefined) {
      await this.sincronizarCasa(id, data.casa);
    }

    this.sseService.emit('producto_actualizado', {
      id: productoActualizado.id,
      nombre: productoActualizado.nombre,
      cantUnidad: productoActualizado.cantUnidad,
      precioVenta: productoActualizado.precioVenta,
      casa: productoActualizado.casa,
    });

    return productoActualizado;
  }

  async deleteProduct(id: string) {
    await this.prisma.lote.deleteMany({ where: { productoId: id } });
    await this.prisma.casas.deleteMany({ where: { productoId: id } });
    await this.prisma.codigoDeBarras.deleteMany({ where: { productoId: id } });

    const productoEliminado = await this.prisma.producto.delete({ where: { id } });

    this.sseService.emit('producto_eliminado', {
      id: productoEliminado.id,
      nombre: productoEliminado.nombre,
    });

    return productoEliminado;
  }

  async getProductById(id: string): Promise<Producto | null> {
    return this.prisma.producto.findUnique({
      where: { id },
      include: {
        lotes: { orderBy: { fechaVencimiento: 'desc' } },
        Casas: true,
      },
    });
  }

  async deleteLote(loteId: string) {
    const loteEliminado = await this.prisma.lote.delete({ where: { id: loteId } });

    const todosLotes = await this.prisma.lote.findMany({
      where: { productoId: loteEliminado.productoId },
      select: { stockTotal: true },
    });
    const nuevaCantUnidad = todosLotes.reduce((s, l) => s + (l.stockTotal || 0), 0);

    await this.prisma.producto.update({
      where: { id: loteEliminado.productoId },
      data: { cantUnidad: nuevaCantUnidad },
    });

    this.sseService.emit('producto_stock_actualizado', {
      id: loteEliminado.productoId,
      cantUnidad: nuevaCantUnidad,
      motivo: 'lote_eliminado',
      loteId,
    });

    return loteEliminado;
  }

  // ── Actualizar lote existente ────────────────────────────────────────────────
  async updateLote(loteId: string, data: { fechaVencimiento?: string | null; stockTotal?: number }) {
    const loteActualizado = await this.prisma.lote.update({
      where: { id: loteId },
      data: {
        ...(data.fechaVencimiento !== undefined
          ? { fechaVencimiento: data.fechaVencimiento ? new Date(`${data.fechaVencimiento}T12:00:00.000Z`) : null }
          : {}),
        ...(data.stockTotal !== undefined ? { stockTotal: data.stockTotal } : {}),
      },
      include: {
        producto: { select: { id: true, nombre: true } },
      },
    });

    const todosLotes = await this.prisma.lote.findMany({
      where: { productoId: loteActualizado.productoId },
      select: { stockTotal: true },
    });
    const nuevaCantUnidad = todosLotes.reduce((s, l) => s + (l.stockTotal || 0), 0);

    await this.prisma.producto.update({
      where: { id: loteActualizado.productoId },
      data: { cantUnidad: nuevaCantUnidad },
    });

    this.sseService.emit('producto_stock_actualizado', {
      id: loteActualizado.productoId,
      cantUnidad: nuevaCantUnidad,
      motivo: 'lote_editado',
      loteId,
    });

    return loteActualizado;
  }

  // ── Crear lote manualmente ───────────────────────────────────────────────────
  async crearLoteManual(data: {
    productoId: string;
    stockTotal: number;
    fechaVencimiento?: string | null;
    nombre?: string;
    origen?: string;
  }) {
    const producto = await this.prisma.producto.findUnique({
      where: { id: data.productoId },
      select: { id: true, nombre: true },
    });

    if (!producto) throw new Error(`Producto con ID ${data.productoId} no encontrado`);

    const loteNuevo = await this.prisma.lote.create({
      data: {
        productoId: data.productoId,
        stockTotal: data.stockTotal || 0,
        stockPorCaja: data.stockTotal || 0,
        stockPorBlister: 0,
        fechaVencimiento: data.fechaVencimiento
          ? new Date(`${data.fechaVencimiento}T12:00:00.000Z`)
          : null,
        nombre: data.nombre || producto.nombre,
        origen: data.origen || 'Manual',
        compraId: null,
      },
    });

    const todosLotes = await this.prisma.lote.findMany({
      where: { productoId: data.productoId },
      select: { stockTotal: true },
    });
    const nuevaCantUnidad = todosLotes.reduce((s, l) => s + (l.stockTotal || 0), 0);

    await this.prisma.producto.update({
      where: { id: data.productoId },
      data: { cantUnidad: nuevaCantUnidad },
    });

    this.sseService.emit('producto_stock_actualizado', {
      id: data.productoId,
      cantUnidad: nuevaCantUnidad,
      motivo: 'lote_creado_manual',
      loteId: loteNuevo.id,
    });

    return loteNuevo;
  }
}