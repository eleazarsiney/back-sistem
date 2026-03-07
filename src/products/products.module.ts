// products.module.ts
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SseModule } from 'src/sse/sse.module';

@Module({
  imports: [PrismaModule, SseModule], // ← NUEVO: agregar SseModule
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule { }