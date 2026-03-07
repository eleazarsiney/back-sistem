import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClientDto, UpdateClientDto } from './update-client.dto';

@Injectable()
export class ClientesService {
    constructor(private readonly prisma: PrismaService) { }

    async createClient(data: CreateClientDto) {
        // ✅ Correlativo automático
        const ultimo = await this.prisma.cliente.findFirst({
            orderBy: { correlativo: 'desc' },
            select: { correlativo: true }
        });

        const nuevoCorrelativo = (ultimo?.correlativo ?? 0) + 1;

        return this.prisma.cliente.create({
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

    async getClients(search?: string) {
        // Sin búsqueda → primeros 10
        if (!search || search.trim() === '') {
            return this.prisma.cliente.findMany({
                take: 10,
                orderBy: { correlativo: 'asc' }
            });
        }

        // Con búsqueda → case-insensitive
        return this.prisma.cliente.findMany({
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

    async getClient(id: string) {
        return this.prisma.cliente.findUnique({ where: { id } });
    }

    async UpdateClient(id: string, data: UpdateClientDto) {
        return this.prisma.cliente.update({ where: { id }, data });
    }

    async DeleteClient(id: string) {
        return this.prisma.cliente.delete({ where: { id } });
    }
}