import { IsDate, IsNumber, IsString, IsOptional, IsArray, ValidateNested, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PagosVentaDto {
  @ApiPropertyOptional({ description: 'ID del pago (autogenerado)' })
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty({ description: 'Fecha del pago', type: Date })
  @IsDate()
  @Type(() => Date)
  fecha: Date;

  @ApiProperty({ description: 'Monto del pago', minimum: 0 })
  @IsNumber()
  monto: number;

  @ApiProperty({ description: 'ID de la venta relacionada' })
  @IsString()
  ventaId: string;
}

export class ProductoVentaDto {


  @ApiProperty({ description: 'Fecha de vencimiento del producto' })
  @IsString()
  @IsOptional()
  fechaVencimiento?: string;

  @ApiProperty({ description: 'ID del item (autogenerado)' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Presentación del producto (unidad/blister/caja)' })
  @IsString()
  presentacion: string;

  @ApiProperty({ description: 'ID del producto vendido' })
  @IsString()
  productoId: string;

  @ApiProperty({ description: 'Nombre del producto' })
  @IsString()
  nombreProducto: string;

  @ApiProperty({ description: 'Cantidad vendida', minimum: 1 })
  @IsNumber()
  cantidad: number;

  @ApiProperty({ description: 'Subtotal del producto', minimum: 0 })
  @IsNumber()
  subtotal: number;

  @ApiProperty({ description: 'Subganancia del producto', minimum: 0 })
  @IsNumber()
  subGanancia: number;

  @ApiProperty({ description: 'ID del lote' })
  @IsString()
  @IsOptional()
  loteId: string;
}

export class CreateVentaDto {

  @ApiProperty({ description: 'ID del lote' })
  @IsString()
  @IsOptional()
  loteId: string;

  @ApiProperty({ description: 'ID del cliente' })
  @IsString()
  @IsOptional()
  clienteId?: string;

  @ApiProperty({ description: 'Fecha de vencimiento del producto' })
  @IsString()
  @IsOptional()
  fechaVencimiento?: string;

  @ApiProperty({ description: 'ID del item (autogenerado)' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Presentación del producto (unidad/blister/caja)' })
  @IsString()
  presentacion: string;

  @ApiProperty({ description: 'Monto del pago', minimum: 0 })
  @IsNumber()
  monto: number;

  @ApiProperty({ description: 'ID del producto vendido' })
  @IsString()
  productoId: string;

  @ApiProperty({ description: 'Nombre del producto' })
  @IsString()
  nombreProducto: string;

  @ApiProperty({ description: 'Cantidad vendida', minimum: 1 })
  @IsNumber()
  cantidad: number;

  @ApiProperty({ description: 'Subtotal del producto', minimum: 0 })
  @IsNumber()
  subtotal: number;

  @ApiProperty({ description: 'Subganancia del producto', minimum: 0 })
  @IsNumber()
  subGanancia: number;

  @ApiProperty({ description: 'Subganancia del producto', minimum: 0 })
  @IsNumber()
  gananciaTotal: number;

  @ApiProperty({ description: 'ID del cliente' })
  @IsString()
  @IsNotEmpty()
  cliente: string;

  @ApiProperty({ description: 'Fecha de un pago' })
  @IsString()
  fechaPago: string;

  @ApiProperty({ description: 'Fecha de pago programada (YYYY-MM-DD)' })
  @IsString()
  @IsOptional()
  fechaDePago?: string;

  @ApiProperty({ description: 'Fecha de registro' })
  @IsString()
  fecha: string;

  @ApiProperty({ description: 'Estado de la venta' })
  @IsString()
  estado: string;

  @ApiProperty({ description: 'Total de la venta', minimum: 0 })
  @IsNumber()
  total: number;

  @ApiProperty({ description: 'Dinero pendiente de pago', minimum: 0 })
  @IsNumber()
  dineroPendiente: number;

  @ApiProperty({ type: [PagosVentaDto], description: 'Lista de pagos realizados' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PagosVentaDto)
  pagos: PagosVentaDto[];

  @ApiProperty({ type: [ProductoVentaDto], description: 'Productos vendidos' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductoVentaDto)
  detalles: ProductoVentaDto[];
}
