// proveedores.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProveedorDto, CreateProveedorDto } from './update-proveedor-dto';

@Injectable()
export class ProveedoresService {
  constructor(private readonly prisma: PrismaService) { }

  async crearProveedor(data: CreateProveedorDto) {
    const ultimo = await this.prisma.proveedor.findFirst({
      orderBy: { correlativo: 'desc' },
      select: { correlativo: true }
    });

    const nuevoCorrelativo = (ultimo?.correlativo ?? 0) + 1;

    return this.prisma.proveedor.create({
      data: {
        nombre: data.nombre,
        encargado: data.encargado,
        telefono: data.telefono,
        Departamento: data.Departamento,
        Municipio: data.Municipio,
        direccion: data.direccion,
        email: data.email ?? '',
        correlativo: nuevoCorrelativo,
      }
    });
  }

  async obtenerProveedores(search?: string) {
    // Sin búsqueda → retorna los primeros 10
    if (!search || search.trim() === '') {
      return this.prisma.proveedor.findMany({
        take: 10,
        orderBy: { correlativo: 'asc' }
      });
    }

    // Con búsqueda → filtra por nombre, encargado o correlativo (case-insensitive)
    return this.prisma.proveedor.findMany({
      where: {
        OR: [
          { nombre: { contains: search, mode: 'insensitive' } },
          { encargado: { contains: search, mode: 'insensitive' } },
          { telefono: { contains: search, mode: 'insensitive' } },
        ]
      },
      orderBy: { correlativo: 'asc' }
    });
  }

  async obtenerProveedor(id: string) {
    return this.prisma.proveedor.findUnique({ where: { id } });
  }

  async actualizarProveedor(id: string, data: UpdateProveedorDto) {
    return this.prisma.proveedor.update({ where: { id }, data });
  }

  async eliminarProveedor(id: string) {
    return this.prisma.proveedor.delete({ where: { id } });
  }
}