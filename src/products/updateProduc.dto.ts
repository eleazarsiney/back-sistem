import { IsString, IsNumber, IsBoolean, IsOptional, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class PropiedadesNuevoProductoDto {
  @ApiPropertyOptional({ description: 'Nombre del producto', default: 'sin definir' })
  @IsString()
  nombre: string = 'sin definir';

  @ApiPropertyOptional({ description: 'Descripción del producto', default: 'sin definir' })
  @IsString()
  @IsOptional()
  descripcion: string = 'sin definir';

  @ApiPropertyOptional({ description: "Codigo de barras" })
  @IsOptional()
  @IsString()
  codigoBarras?: string | undefined;

  @ApiPropertyOptional({ description: 'Presentación del producto', default: 'sin definir' })
  @IsString()
  @IsOptional()
  presentacion: string = 'sin definir';

  @ApiPropertyOptional({ description: 'Nombre genérico del producto', default: 'sin definir' })
  @IsString()
  @IsOptional()
  generico: string = 'sin definir';

  @ApiPropertyOptional({ description: 'Gramaje/peso del producto', default: 'sin definir' })
  @IsString()
  @IsOptional()
  gramaje: string = 'sin definir';

  @ApiPropertyOptional({ description: 'Costo del producto', default: 0 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  costo: number = 0;

  @ApiPropertyOptional({ description: 'Precio de venta del producto', default: 0 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  precioVenta: number = 0;

  @ApiPropertyOptional({ description: 'Alerta de stock bajo', default: false })
  @IsBoolean()
  @IsOptional()
  alertaStock: boolean = false;

  @ApiPropertyOptional({ description: 'Casa o laboratorio fabricante', default: 'sin definir' })
  @IsString()
  @IsOptional()
  casa: string = 'sin definir';

  @ApiPropertyOptional({ description: 'Cantidad en unidades', default: 0 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  cantUnidad: number = 0;

  @ApiPropertyOptional({ description: 'Cantidad en cajas', default: 0 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  cantCaja: number = 0;

  @ApiPropertyOptional({ description: 'Cantidad en blisters', default: 0 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  cantBlister: number = 0;

  @ApiPropertyOptional({ description: 'Precio unitario por unidad', default: 0 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  precioUnitario: number = 0;

  @ApiPropertyOptional({ description: 'Precio por blister', default: 0 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  precioBlister: number = 0;

  @ApiPropertyOptional({ description: 'Precio por caja', default: 0 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  precioCaja: number = 0;

  @ApiPropertyOptional({ description: 'Costo de compra unitario', default: 0 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  costoCompraUnitario: number = 0;

  @ApiPropertyOptional({ description: 'Costo de compra por blister', default: 0 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  costoCompraBlister: number = 0;

  @ApiPropertyOptional({ description: 'Costo de compra por caja', default: 0 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  costoCompraCaja: number = 0;
}

// Si también necesitas un DTO para el lote que se relaciona con el producto
export class LoteNuevoProductoDto {
  @ApiPropertyOptional({ description: 'Origen del lote', default: 'sin definir' })
  @IsString()
  @IsOptional()
  origen: string = 'sin definir';

  @ApiPropertyOptional({ description: 'Fecha de vencimiento (YYYY-MM-DD)', default: null })
  @IsString()
  @IsOptional()
  fechaVencimiento?: string;

  @ApiPropertyOptional({ description: 'Stock total en unidades', default: 0 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  stockTotal: number = 0;

  @ApiPropertyOptional({ description: 'Unidades por caja en este lote', default: 0 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  stockPorCaja: number = 0;

  @ApiPropertyOptional({ description: 'Unidades por blister en este lote', default: 0 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  stockPorBlister: number = 0;

  @ApiPropertyOptional({ description: 'ID de la compra', default: 0 })
  @IsString()
  @IsOptional()
  compraId: string;
}

export class NuevoProductoCompletoDto {
  @ApiPropertyOptional()
  producto: PropiedadesNuevoProductoDto;

  @ApiPropertyOptional()

  lote: LoteNuevoProductoDto;
}