import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() body: { nombre: string; password: string; permisos: string[] }) {
    return this.usersService.crearuser(body);
  }

  @Get()
  findAll() {
    return this.usersService.obtenerusers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.obteneruser(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: { nombre?: string; password?: string; permisos?: string[] },
  ) {
    return this.usersService.actualizaruser(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.eliminaruser(id);
  }
}