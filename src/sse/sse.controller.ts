import { Controller, Get, Res, Sse } from '@nestjs/common';
import { Response } from 'express';
import { Observable, map } from 'rxjs';
import { SseService } from './sse.service';

@Controller('events')
export class SseController {
    constructor(private readonly sseService: SseService) { }

    // GET /api/events/stream
    // El frontend se conecta UNA SOLA VEZ aquí y recibe todos los eventos
    @Sse('stream')
    stream(@Res() res: Response): Observable<MessageEvent> {
        // Headers necesarios para SSE en Railway
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('X-Accel-Buffering', 'no'); // ← importante para Railway/Nginx

        return this.sseService.getEventStream().pipe(
            map((event) => ({
                data: JSON.stringify(event),  // { type: 'venta_creada', data: {...} }
            } as MessageEvent)),
        );
    }
}