// pagos-ventas.service.ts

import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePagoVentaDto, UpdatePagoVentaDto, FiltrarPagosVentaDto } from './pagos-ventas.dto';
import { SseService } from 'src/sse/sse.service';

@Injectable()
export class PagosVentaService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly sseService: SseService,
    ) { }

    async crear(dto: CreatePagoVentaDto) {
        try {
            const pago = await this.prisma.pagosRealizadosVentas.create({
                data: {
                    monto: dto.monto,
                    fechaPago: dto.fechaPago ? new Date(dto.fechaPago) : null,
                    ...(dto.clienteId
                        ? { cliente: { connect: { id: dto.clienteId } } }
                        : {}),
                },
                include: {
                    cliente: {
                        select: { id: true, nombre: true, encargado: true, telefono: true }
                    }
                }
            });

            this.sseService.emit('pago_venta_creado', {
                id: pago.id,
                clienteId: pago.clienteId,
                monto: pago.monto,
                fechaPago: pago.fechaPago,
            });

            return pago;
        } catch (error) {
            console.error('Error creando pago de venta:', error);
            throw new InternalServerErrorException('Error al crear el pago');
        }
    }

    async obtenerTodos(filtros: FiltrarPagosVentaDto) {
        try {
            const where: any = {};

            if (filtros.fechaInicio || filtros.fechaFin) {
                where.fechaPago = {};
                if (filtros.fechaInicio) {
                    where.fechaPago.gte = new Date(`${filtros.fechaInicio}T00:00:00.000Z`);
                }
                if (filtros.fechaFin) {
                    where.fechaPago.lte = new Date(`${filtros.fechaFin}T23:59:59.999Z`);
                }
            }

            if (filtros.clienteId) {
                where.clienteId = filtros.clienteId;
            }

            return await this.prisma.pagosRealizadosVentas.findMany({
                where,
                include: {
                    cliente: {
                        select: { id: true, nombre: true, encargado: true, telefono: true }
                    }
                },
                orderBy: { fechaPago: 'desc' }
            });
        } catch (error) {
            console.error('Error obteniendo pagos de venta:', error);
            throw new InternalServerErrorException('Error al obtener los pagos');
        }
    }

    async obtenerPorId(id: string) {
        const pago = await this.prisma.pagosRealizadosVentas.findUnique({
            where: { id },
            include: {
                cliente: {
                    select: { id: true, nombre: true, encargado: true, telefono: true }
                }
            }
        });
        if (!pago) throw new NotFoundException(`Pago con ID ${id} no encontrado`);
        return pago;
    }

    async obtenerPorCliente(clienteId: string) {
        const pagos = await this.prisma.pagosRealizadosVentas.findMany({
            where: { clienteId },
            include: {
                cliente: {
                    select: { id: true, nombre: true, encargado: true, telefono: true }
                }
            },
            orderBy: { fechaPago: 'desc' }
        });
        const total = pagos.reduce((acc, p) => acc + p.monto, 0);
        return { clienteId, pagos, totalPagado: total, cantidadPagos: pagos.length };
    }

    async actualizar(id: string, dto: UpdatePagoVentaDto) {
        await this.obtenerPorId(id);

        try {
            const data: any = {};

            if (dto.monto !== undefined) data.monto = dto.monto;

            if (dto.fechaPago !== undefined) {
                data.fechaPago = dto.fechaPago ? new Date(dto.fechaPago) : null;
            }

            if (dto.clienteId !== undefined) {
                data.cliente = dto.clienteId
                    ? { connect: { id: dto.clienteId } }
                    : { disconnect: true };
            }

            const pago = await this.prisma.pagosRealizadosVentas.update({
                where: { id },
                data,
                include: {
                    cliente: {
                        select: { id: true, nombre: true, encargado: true, telefono: true }
                    }
                }
            });

            this.sseService.emit('pago_venta_creado', {
                id: pago.id,
                clienteId: pago.clienteId,
                monto: pago.monto,
                fechaPago: pago.fechaPago,
            });

            return pago;
        } catch (error) {
            console.error('Error actualizando pago de venta:', error);
            throw new InternalServerErrorException('Error al actualizar el pago');
        }
    }

    async eliminar(id: string) {
        const pago = await this.obtenerPorId(id);

        try {
            await this.prisma.pagosRealizadosVentas.delete({ where: { id } });

            this.sseService.emit('pago_venta_eliminado', {
                id,
                clienteId: pago.clienteId,
            });

            return { mensaje: `Pago ${id} eliminado correctamente` };
        } catch (error) {
            console.error('Error eliminando pago de venta:', error);
            throw new InternalServerErrorException('Error al eliminar el pago');
        }
    }

    async totalPorCliente(clienteId: string) {
        const pagos = await this.prisma.pagosRealizadosVentas.findMany({
            where: { clienteId },
            select: { monto: true }
        });
        const total = pagos.reduce((acc, p) => acc + p.monto, 0);
        return { clienteId, totalPagado: total, cantidadPagos: pagos.length };
    }
}