import { Module } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SseModule } from 'src/sse/sse.module';

@Module({
  imports: [PrismaModule, SseModule], // ← NUEVO: agregar SseModule
  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule { }