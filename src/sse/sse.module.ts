import { Module } from '@nestjs/common';
import { SseService } from './sse.service';
import { SseController } from './sse.controller';

@Module({
    controllers: [SseController],
    providers: [SseService],
    exports: [SseService], // ← exportar para usarlo en VentasModule, PagosModule, etc.
})
export class SseModule { }