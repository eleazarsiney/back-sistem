// pagos-ventas.controller.ts

import {
    Controller, Get, Post, Put, Delete,
    Param, Body, Query, BadRequestException
} from '@nestjs/common';
import { PagosVentaService } from './pagos-ventas.service';
import { CreatePagoVentaDto, UpdatePagoVentaDto, FiltrarPagosVentaDto } from './pagos-ventas.dto';
@Controller('pagos-ventas')
export class PagosVentaController {
    constructor(private readonly pagosVentaService: PagosVentaService) { }

    // POST /pagos-ventas
    // Body: { monto, fechaPago?, clienteId? }
    @Post()
    async crear(@Body() dto: CreatePagoVentaDto) {
        if (!dto.monto || dto.monto <= 0) {
            throw new BadRequestException('El monto debe ser mayor a 0');
        }
        return this.pagosVentaService.crear(dto);
    }

    // GET /pagos-ventas
    // GET /pagos-ventas?fechaInicio=2026-01-01&fechaFin=2026-03-31
    // GET /pagos-ventas?clienteId=xxx
    @Get()
    async obtenerTodos(@Query() query: FiltrarPagosVentaDto) {
        return this.pagosVentaService.obtenerTodos(query);
    }

    // GET /pagos-ventas/cliente/:clienteId
    // Devuelve pagos + total del cliente
    @Get('cliente/:clienteId')
    async obtenerPorCliente(@Param('clienteId') clienteId: string) {
        return this.pagosVentaService.obtenerPorCliente(clienteId);
    }

    // GET /pagos-ventas/cliente/:clienteId/total
    @Get('cliente/:clienteId/total')
    async totalPorCliente(@Param('clienteId') clienteId: string) {
        return this.pagosVentaService.totalPorCliente(clienteId);
    }

    // GET /pagos-ventas/:id
    @Get(':id')
    async obtenerPorId(@Param('id') id: string) {
        return this.pagosVentaService.obtenerPorId(id);
    }

    // PUT /pagos-ventas/:id
    // Body: { monto?, fechaPago?, clienteId? }
    @Put(':id')
    async actualizar(@Param('id') id: string, @Body() dto: UpdatePagoVentaDto) {
        return this.pagosVentaService.actualizar(id, dto);
    }

    // DELETE /pagos-ventas/:id
    @Delete(':id')
    async eliminar(@Param('id') id: string) {
        return this.pagosVentaService.eliminar(id);
    }
}