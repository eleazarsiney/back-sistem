import { Injectable } from '@nestjs/common';
import { Subject, Observable } from 'rxjs';

export interface SseEvent {
    type: string;   // 'venta_creada', 'venta_editada', 'pago_creado', 'producto_actualizado', etc.
    data: any;
}

@Injectable()
export class SseService {
    // Subject central — todo evento pasa por aquí
    private eventSubject = new Subject<SseEvent>();

    // El controller se suscribe a este Observable
    getEventStream(): Observable<SseEvent> {
        return this.eventSubject.asObservable();
    }

    // Llamar esto desde cualquier service cuando algo cambie
    emit(type: string, data: any) {
        this.eventSubject.next({ type, data });
    }
}