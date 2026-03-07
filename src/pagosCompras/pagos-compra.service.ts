// pagos-compra.service.ts

import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePagoCompraDto, FiltrarPagosCompraDto, UpdatePagoCompraDto } from './pagos-compra.dto';
import { SseService } from 'src/sse/sse.service';

@Injectable()
export class PagosCompraService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly sseService: SseService,
    ) { }

    async crear(dto: CreatePagoCompraDto) {
        try {
            const pago = await this.prisma.pagosRealizadosCompra.create({
                data: {
                    monto: dto.monto,
                    fechaPago: dto.fechaPago ? new Date(dto.fechaPago) : null,
                    ...(dto.proveedorId
                        ? { Proveedores: { connect: { id: dto.proveedorId } } }
                        : {}),
                },
                include: {
                    Proveedores: {
                        select: { id: true, nombre: true, encargado: true, telefono: true }
                    }
                }
            });

            this.sseService.emit('pago_compra_creado', {
                id: pago.id,
                proveedorId: pago.proveedorId,
                monto: pago.monto,
                fechaPago: pago.fechaPago,
            });

            return pago;
        } catch (error) {
            console.error('Error creando pago de compra:', error);
            throw new InternalServerErrorException('Error al crear el pago');
        }
    }

    async obtenerTodos(filtros: FiltrarPagosCompraDto) {
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

            if (filtros.proveedorId) {
                where.proveedorId = filtros.proveedorId;
            }

            return await this.prisma.pagosRealizadosCompra.findMany({
                where,
                include: {
                    Proveedores: {
                        select: { id: true, nombre: true, encargado: true, telefono: true }
                    }
                },
                orderBy: { fechaPago: 'desc' }
            });
        } catch (error) {
            console.error('Error obteniendo pagos de compra:', error);
            throw new InternalServerErrorException('Error al obtener los pagos');
        }
    }

    async obtenerPorId(id: string) {
        const pago = await this.prisma.pagosRealizadosCompra.findUnique({
            where: { id },
            include: {
                Proveedores: {
                    select: { id: true, nombre: true, encargado: true, telefono: true }
                }
            }
        });
        if (!pago) throw new NotFoundException(`Pago con ID ${id} no encontrado`);
        return pago;
    }

    async actualizar(id: string, dto: UpdatePagoCompraDto) {
        await this.obtenerPorId(id);

        try {
            const data: any = {};

            if (dto.monto !== undefined) data.monto = dto.monto;

            if (dto.fechaPago !== undefined) {
                data.fechaPago = dto.fechaPago ? new Date(dto.fechaPago) : null;
            }

            if (dto.proveedorId !== undefined) {
                data.Proveedores = dto.proveedorId
                    ? { connect: { id: dto.proveedorId } }
                    : { disconnect: true };
            }

            const pago = await this.prisma.pagosRealizadosCompra.update({
                where: { id },
                data,
                include: {
                    Proveedores: {
                        select: { id: true, nombre: true, encargado: true, telefono: true }
                    }
                }
            });

            this.sseService.emit('pago_compra_creado', {
                id: pago.id,
                proveedorId: pago.proveedorId,
                monto: pago.monto,
                fechaPago: pago.fechaPago,
            });

            return pago;
        } catch (error) {
            console.error('Error actualizando pago de compra:', error);
            throw new InternalServerErrorException('Error al actualizar el pago');
        }
    }

    async eliminar(id: string) {
        const pago = await this.obtenerPorId(id);

        try {
            await this.prisma.pagosRealizadosCompra.delete({ where: { id } });

            this.sseService.emit('pago_compra_eliminado', {
                id,
                proveedorId: pago.proveedorId,
            });

            return { mensaje: `Pago ${id} eliminado correctamente` };
        } catch (error) {
            console.error('Error eliminando pago de compra:', error);
            throw new InternalServerErrorException('Error al eliminar el pago');
        }
    }

    async totalPorProveedor(proveedorId: string) {
        const pagos = await this.prisma.pagosRealizadosCompra.findMany({
            where: { proveedorId },
            select: { monto: true }
        });
        const total = pagos.reduce((acc, p) => acc + p.monto, 0);
        return { proveedorId, totalPagado: total, cantidadPagos: pagos.length };
    }
}