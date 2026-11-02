import { ListadoQuery } from '../common/listado';
import { rethrowKnownError } from '../common/operation-errors';
import { Controller, Get, Post, Body, Param, Query, Delete, Put, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { ComprasService } from './compras.service';
import { CreateCompraAndProductoDto } from './create-compra.dto';
import { FiltrarComprasDto } from './fechaFilter.dto';
import { Producto } from 'generated/prisma';

@Controller('compras')
export class ComprasController {
  constructor(private readonly comprasService: ComprasService) { }

  // ── Rutas estáticas primero ──────────────────────────────
  @Get('listado')
  listarPagina(@Query() query: ListadoQuery) {
    return this.comprasService.listarPagina(query);
  }

  @Get()
  obtenerTodo() {
    return this.comprasService.ObtenerTodasLasCompras();
  }

  @Get('ultimo-correlativo')
  async ObtenerUltimoCorrelativo() {
    return this.comprasService.ObtenerUltimoCorrelativo();
  }

  @Get('por-fecha')
  async filtrarComprasPorFecha(@Query() opciones: FiltrarComprasDto) {
    return this.comprasService.FiltrarComprasPorFecha(opciones);
  }

  @Get('por-proveedor')
  async filtrarPorProveedor(@Query('proveedor') proveedor: string) {
    return this.comprasService.FiltrarPorProveedor(proveedor);
  }

  @Get('por-proveedor-id')
  async filtrarPorProveedorId(@Query('proveedorId') proveedorId: string) {
    return this.comprasService.ObtenerComprasPorProveedor(proveedorId);
  }

  @Get('por-estado')
  async filtrarPorEstado(@Query('estado') estado: string) {
    return this.comprasService.filtrarPorEstado(estado);
  }

  @Get('buscar')
  async buscarPorNombre(@Query('nombre') nombre: string): Promise<Producto[]> {
    if (!nombre || nombre.trim() === '') return [];
    return this.comprasService.getProductName(nombre);
  }

  @Post()
  async registrarNuevaCompra(@Body() data: CreateCompraAndProductoDto) {
    return this.comprasService.RegistarNuevaCompra(data);
  }

  // ── Rutas dinámicas al final ─────────────────────────────
  @Get(':id')
  async obtenerCompraPorId(@Param('id') id: string) {
    return this.comprasService.ObtenerCompraPorId(id);
  }

  @Put(':id')
  async actualizarCompra(
    @Param('id') id: string,
    @Body() data: CreateCompraAndProductoDto
  ) {
    return this.comprasService.updateCompra(id, data);
  }

  // ✅ NUEVO: Eliminar compra completa con devolución de stock y lotes
  @Delete(':id')
  async eliminarCompra(@Param('id') id: string) {
    try {
      return await this.comprasService.eliminarCompraCompleta(id);
    } catch (error) {
      rethrowKnownError(error);
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('No se pudo completar la operación. Inténtalo de nuevo.');
    }
  }
}