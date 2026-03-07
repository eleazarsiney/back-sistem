// pagos-ventas.module.ts

import { Module } from '@nestjs/common';
import { PagosVentaController } from './pagos-ventas.controller';
import { PagosVentaService } from './pagos-ventas.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SseModule } from 'src/sse/sse.module';

@Module({
    imports: [SseModule], // ← NUEVO
    controllers: [PagosVentaController],
    providers: [PagosVentaService, PrismaService],
    exports: [PagosVentaService],
})
export class PagosVentaModule { }