import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Query,
  InternalServerErrorException,
  BadRequestException,
  Delete,
  Param,
} from '@nestjs/common';
import { VentasService } from './ventas.service';
import { CreateVentaDto } from './create-venta.dto';

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) { }

  // ── Rutas estáticas primero (sin parámetros dinámicos) ──────────────────
  @Get()
  obtenerVentas(@Query('clienteId') clienteId?: string) {
    if (clienteId) {
      return this.ventasService.obtenerVentasPorCliente(clienteId);
    }
    return this.ventasService.obtenerTodasLasVentas();
  }

  @Get('ultimo-correlativo')
  async ObtenerUltimoCorrelativo() {
    return this.ventasService.ObtenerUltimoCorrelativo();
  }

  @Get('vendido')
  obternerVendido() {
    return this.ventasService.obtenerLoVendido();
  }

  @Post()
  async registrarVenta(@Body() createVentaDto: CreateVentaDto) {
    try {
      return await this.ventasService.RegistrarVenta(createVentaDto);
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new InternalServerErrorException(error.message);
    }
  }

  // ── Rutas con prefijo estático + parámetro (antes de rutas solo dinámicas) ──
  @Delete('borrar-todo')
  async borrarTodo() {
    return this.ventasService.borrarTodo();
  }

  @Delete('producto-vendido/:id')
  eliminarProducto(@Param('id') id: string) {
    return this.ventasService.eliminarProductoVendido(id);
  }

  @Put('editar/:ventaId')
  async editarVenta(
    @Param('ventaId') ventaId: string,
    @Body() data: {
      clienteId?: string | null;
      clienteNombre?: string;
      cliente?: string;
      estado?: string;
      fecha?: string;
      cambios: {
        listaProductoId: string;
        nuevaCantidad: number;
        nuevoLoteId?: string;
      }[];
    }
  ) {
    try {
      return await this.ventasService.EditarVenta(ventaId, data);
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new InternalServerErrorException(error.message);
    }
  }

  // ── Rutas puramente dinámicas AL FINAL ──────────────────────────────────
  @Get(':id')
  obtenerVentaPorId(@Param('id') id: string) {
    return this.ventasService.obtenerVentaPorId(id);
  }

  @Delete(':ventaId')
  async eliminarVenta(@Param('ventaId') ventaId: string) {
    try {
      return await this.ventasService.eliminarVentaCompleta(ventaId);
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new InternalServerErrorException(error.message);
    }
  }
}