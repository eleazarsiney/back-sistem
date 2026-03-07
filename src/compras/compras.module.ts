import { Module } from '@nestjs/common';
import { ComprasService } from './compras.service';
import { ComprasController } from './compras.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SseModule } from 'src/sse/sse.module';

@Module({
  imports: [PrismaModule, SseModule], // ← NUEVO
  controllers: [ComprasController],
  providers: [ComprasService],
})
export class ComprasModule { }