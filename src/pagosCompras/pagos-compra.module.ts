// pagos-compra.module.ts

import { Module } from '@nestjs/common';
import { PagosCompraController } from './pagos-compra.controller';
import { PagosCompraService } from './pagos-compra.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SseModule } from 'src/sse/sse.module'; // ← NUEVO

@Module({
    imports: [SseModule], // ← NUEVO
    controllers: [PagosCompraController],
    providers: [PagosCompraService, PrismaService],
    exports: [PagosCompraService],
})
export class PagosCompraModule { }