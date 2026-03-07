import { Controller, Post, Delete, Get, Put, Body, Param, Query } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClientDto, UpdateClientDto } from './update-client.dto';

@Controller('clientes')
export class ClientesController {
    constructor(private readonly clientServices: ClientesService) { }

    @Post()
    create(@Body() data: CreateClientDto) {
        return this.clientServices.createClient(data);
    }

    @Get()
    getClients(@Query('search') search?: string) {
        return this.clientServices.getClients(search);
    }

    @Get(':id')
    getClient(@Param('id') id: string) {
        return this.clientServices.getClient(id);
    }

    @Put(':id')   // ✅ era 'id' sin los dos puntos
    update(@Param('id') id: string, @Body() data: UpdateClientDto) {
        return this.clientServices.UpdateClient(id, data);
    }

    @Delete(':id')  // ✅ era 'id' sin los dos puntos
    delete(@Param('id') id: string) {
        return this.clientServices.DeleteClient(id);
    }
}