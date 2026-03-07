// proveedores.controller.ts
import { Controller, Post, Get, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { ProveedoresService } from './proveedores.service';
import { UpdateProveedorDto, CreateProveedorDto } from './update-proveedor-dto';

@Controller('proveedores')
export class ProveedoresController {
    constructor(private readonly proService: ProveedoresService) { }

    @Post()
    create(@Body() data: CreateProveedorDto) {
        return this.proService.crearProveedor(data);
    }

    @Get()
    getAll(@Query('search') search?: string) {
        return this.proService.obtenerProveedores(search);
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.proService.obtenerProveedor(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: UpdateProveedorDto) {
        return this.proService.actualizarProveedor(id, data);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.proService.eliminarProveedor(id);
    }
}