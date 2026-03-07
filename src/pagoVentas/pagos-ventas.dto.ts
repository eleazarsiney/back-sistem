// pagos-ventas.dto.ts

export class CreatePagoVentaDto {
    monto: number;
    fechaPago?: string;   // "YYYY-MM-DD" — opcional (nullable en schema)
    clienteId?: string;   // relación a Cliente — opcional
}

export class UpdatePagoVentaDto {
    monto?: number;
    fechaPago?: string;
    clienteId?: string;
}

export class FiltrarPagosVentaDto {
    fechaInicio?: string;  // YYYY-MM-DD
    fechaFin?: string;     // YYYY-MM-DD
    clienteId?: string;    // filtrar por cliente
}