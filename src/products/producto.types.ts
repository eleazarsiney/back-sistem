export interface Lote {
    id: string;
    origen: string;
    productoId: string;
    nombre: string;
    fechaVencimiento: Date | null;
    stockTotal: number;
    stockPorCaja: number;
    stockPorBlister: number;
    createdAt: Date;
    compraId: string;
}

export interface Producto {
    id: string;
    nombre: string;
    descripcion: string;
    codigoBarras: string;
    presentacion: string;
    generico: string;
    gramaje: string;
    costo: number;
    precioVenta: number;
    alertaStock: boolean;
    casa: string;
    cantUnidad: number;
    cantCaja: number;
    cantBlister: number;
    precioUnitario: number;
    precioBlister: number;
    precioCaja: number;
    costoCompraUnitario: number;
    costoCompraBlister: number;
    costoCompraCaja: number;
    createdAt: Date;
    lotes?: Lote[];
}