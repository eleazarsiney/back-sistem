// pagos-compra.controller.ts

import {
    Controller, Get, Post, Put, Delete,
    Param, Body, Query,
    BadRequestException, InternalServerErrorException
} from '@nestjs/common';
import { PagosCompraService } from './pagos-compra.service';
import { CreatePagoCompraDto, UpdatePagoCompraDto, FiltrarPagosCompraDto } from './pagos-compra.dto';

@Controller('pagos-compra')
export class PagosCompraController {
    constructor(private readonly pagosCompraService: PagosCompraService) { }

    // POST /pagos-compra
    // Body: { monto, fechaPago?, proveedorId? }
    @Post()
    async crear(@Body() dto: CreatePagoCompraDto) {
        if (!dto.monto || dto.monto <= 0) {
            throw new BadRequestException('El monto debe ser mayor a 0');
        }
        return this.pagosCompraService.crear(dto);
    }

    // GET /pagos-compra
    // GET /pagos-compra?fechaInicio=2026-01-01&fechaFin=2026-03-31
    // GET /pagos-compra?proveedorId=xxx
    @Get()
    async obtenerTodos(@Query() query: FiltrarPagosCompraDto) {
        return this.pagosCompraService.obtenerTodos(query);
    }

    // GET /pagos-compra/proveedor/:proveedorId/total
    @Get('proveedor/:proveedorId/total')
    async totalPorProveedor(@Param('proveedorId') proveedorId: string) {
        return this.pagosCompraService.totalPorProveedor(proveedorId);
    }

    // GET /pagos-compra/:id
    @Get(':id')
    async obtenerPorId(@Param('id') id: string) {
        return this.pagosCompraService.obtenerPorId(id);
    }

    // PUT /pagos-compra/:id
    // Body: { monto?, fechaPago?, proveedorId? }
    @Put(':id')
    async actualizar(@Param('id') id: string, @Body() dto: UpdatePagoCompraDto) {
        return this.pagosCompraService.actualizar(id, dto);
    }

    // DELETE /pagos-compra/:id
    @Delete(':id')
    async eliminar(@Param('id') id: string) {
        return this.pagosCompraService.eliminar(id);
    }
}