import { IsDate, IsNumber, IsString, IsOptional, IsArray, ValidateNested, isString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PagosPropities {
  @ApiProperty({ description: 'Fecha del pago', type: Date })
  @IsDate()
  @Type(() => Date)
  fecha: Date;

  @ApiProperty({ description: 'Monto del pago', minimum: 0 })
  @IsNumber()
  monto: number;

  @ApiProperty({ description: 'ID de la compra relacionada' })
  @IsString()
  compraId: string;
}

export class listaProductosCompraDto {
  @ApiProperty({ description: 'ID del producto' })
  @IsString()
  productoId: string;

  @ApiProperty({ description: "costo del producto" })
  @IsString()
  precioCosto: number

  @ApiProperty({ description: 'Nombre del producto' })
  @IsString()
  nombreProducto: string;

  @ApiProperty({ description: 'Cantidad del producto' })
  @IsNumber()
  cantidad: number;

  @ApiProperty({ description: 'Subtotal del producto' })
  @IsNumber()
  subTotal: number;

  @ApiProperty({ description: 'fecha de vencimiento del lote' })
  @IsDate()
  fechaDeVencimiento: Date;

  @ApiProperty({ description: 'fecha que se ingreso el producto' })
  @IsDate()
  fecha: Date;

  @ApiProperty({ description: 'stock por caja' })
  @IsNumber()
  stockPorCaja: number;

  @ApiProperty({ description: 'stock total' })
  @IsNumber()
  stockTotal: number;

  @ApiProperty({ description: 'stock por blister' })
  @IsNumber()
  stockPorBlister: number;

  @ApiProperty({ description: 'origen' })
  @IsString()
  origen: string;

}

export class CreateCompraAndProductoDto {

  @ApiProperty({ type: [listaProductosCompraDto], description: 'Lista de productos' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => listaProductosCompraDto)
  listaProductosCompra: listaProductosCompraDto[];


  @ApiProperty({ description: 'Monto del pago', minimum: 0 })
  @IsNumber()
  monto: number;



  @ApiProperty({ description: 'Nombre del producto' })
  @IsString()
  nombre: string;

  @ApiProperty({ description: 'Fecha de vencimiento del producto (YYYY-MM-DD)' })
  @IsString()
  fechaVencimiento: string;

  @ApiProperty({ description: 'Fecha de vencimiento del producto (YYYY-MM-DD)' })
  @IsString()
  fecha: string;

  @ApiProperty({ description: 'Descripción del producto' })
  @IsString()
  descripcion: string;

  @ApiProperty({ description: 'Origen del producto' })
  @IsString()
  origen: string;

  @ApiProperty({ description: 'Código de barras del producto' })
  @IsString()
  codigoBarras: string;

  @ApiProperty({ description: 'Observaciones de la compra' })
  @IsString()
  @IsOptional()
  observaciones: string;

  @ApiProperty({ description: 'Comprador de la compra' })
  @IsString()
  comprador: string;

  @ApiProperty({ description: 'Visitador de la compra' })
  @IsString()
  visitador: string;

  // Precios
  @ApiProperty({ description: 'Precio unitario', minimum: 0 })
  @IsNumber()
  precioUnitario: number;

  @ApiProperty({ description: 'Precio por blister', minimum: 0 })
  @IsNumber()
  precioBlister: number;

  @ApiProperty({ description: 'Precio por caja', minimum: 0 })
  @IsNumber()
  precioCaja: number;

  // Costos
  @ApiProperty({ description: 'Costo unitario de compra', minimum: 0 })
  @IsNumber()
  costoCompraUnitario: number;

  @ApiProperty({ description: 'Costo de compra por blister', minimum: 0 })
  @IsNumber()
  costoCompraBlister: number;

  @ApiProperty({ description: 'Costo de compra por caja', minimum: 0 })
  @IsNumber()
  costoCompraCaja: number;

  @ApiProperty({ description: 'Total de la compra', minimum: 0 })
  @IsNumber()
  total: number;

  @ApiProperty({ description: 'Id de la compra', minimum: 0 })
  @IsString()
  compraId: string;

  // Unidades y empaques
  @ApiProperty({ description: 'Stock total disponible', minimum: 0 })
  @IsNumber()
  stockTotal: number;

  @ApiPropertyOptional({ description: 'Stock por caja', minimum: 0 })
  @IsNumber()
  @IsOptional()
  StockPorCaja: number;

  @ApiPropertyOptional({ description: 'Stock por blister', minimum: 0 })
  @IsNumber()
  @IsOptional()
  StockPorBlister: number;

  @ApiPropertyOptional({ description: 'Proveedor del producto', default: 'no hay proveedor' })
  @IsString()
  proveedor: string = "no hay proveedor";

  @ApiPropertyOptional({ description: 'ID del proveedor', default: 'no hay proveedor' })
  @IsString()
  proveedorId: string = "no hay proveedor";

  @ApiProperty({ description: 'ID del producto' })
  @IsString()
  @IsOptional()
  productoId: string;

  @ApiProperty({ description: 'ID del lote' })
  @IsString()
  @IsOptional()
  loteId: string;

  @ApiProperty({ description: 'Estado del producto/compra' })
  @IsString()
  estado: string;

  @ApiProperty({ description: 'Fecha de pago (YYYY-MM-DD)' })
  @IsString()
  @IsOptional()
  fechaPago?: string;

  @ApiProperty({ description: 'Fecha de pago (YYYY-MM-DD)' })
  @IsString()
  @IsOptional()
  fechaDePago?: string;

  @ApiProperty({ type: [PagosPropities], description: 'Lista de pagos' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PagosPropities)
  pagos: PagosPropities[];

  // Cantidades
  @ApiProperty({ description: 'Dinero pendiente de pago', minimum: 0 })
  @IsNumber()
  dineroPendiente: number;

  @ApiProperty({ description: 'Cantidad de cajas', minimum: 0 })
  @IsNumber()
  cantUnidad: number;


  @ApiProperty({ description: 'Cantidad de cajas', minimum: 0 })
  @IsNumber()
  cantCaja: number;

  @ApiProperty({ description: 'Cantidad de blisters', minimum: 0 })
  @IsNumber()
  cantBlister: number;
}

export class ActualizarPorDevolucionDto {
  @ApiPropertyOptional({ description: 'Stock a actualizar', minimum: 0 })
  @IsNumber()
  @IsOptional()
  stock?: number = 0;

  @ApiPropertyOptional({ description: 'Cajas a actualizar', minimum: 0, default: 0 })
  @IsNumber()
  @IsOptional()
  caja: number = 0;

  @ApiPropertyOptional({ description: 'Blisters a actualizar', minimum: 0, default: 0 })
  @IsNumber()
  @IsOptional()
  blister: number = 0;

  @ApiPropertyOptional({ description: 'ID del producto' })
  @IsString()
  @IsOptional()
  productoId?: string = "sin definir";

  @ApiPropertyOptional({ description: 'Cantidad a actualizar', minimum: 0, default: 0 })
  @IsNumber()
  @IsOptional()
  cantidad: number = 0;
}