// pagos-compra.dto.ts

export class CreatePagoCompraDto {
    monto: number;
    fechaPago?: string;    // "YYYY-MM-DD" — opcional (campo nullable en schema)
    proveedorId?: string;  // relación a Proveedor — opcional
}

export class UpdatePagoCompraDto {
    monto?: number;
    fechaPago?: string;
    proveedorId?: string;
}

export class FiltrarPagosCompraDto {
    fechaInicio?: string;  // YYYY-MM-DD
    fechaFin?: string;     // YYYY-MM-DD
    proveedorId?: string;  // filtrar por proveedor
}