import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SseService } from '../sse/sse.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly sseService: SseService,
  ) { }

  async crearuser(data: {
    nombre: string;
    password: string;
    permisos: string[];
  }) {
    const user = await this.prisma.user.create({
      data: {
        ...data,
        permisos: data.permisos ?? [],
      },
    });
    this.sseService.emit('usuario_creado', user);
    return user;
  }

  async obtenerusers() {
    return this.prisma.user.findMany();
  }

  async obteneruser(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async actualizaruser(id: string, data: {
    nombre?: string;
    password?: string;
    permisos?: string[];
  }) {
    const user = await this.prisma.user.update({ where: { id }, data });
    this.sseService.emit('usuario_editado', user);
    return user;
  }

  async eliminaruser(id: string) {
    const user = await this.prisma.user.delete({ where: { id } });
    this.sseService.emit('usuario_eliminado', { id });
    return user;
  }
}