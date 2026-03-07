import { IsString, IsOptional, IsEmail, IsPhoneNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
export class UpdateProveedorDto {
  @ApiPropertyOptional({ description: 'Nombre del proveedor', default: 'sin definir' })
  @IsString()
  @IsOptional()
  nombre: string = 'sin definir';

  @ApiPropertyOptional({ description: 'Teléfono del proveedor', default: 'sin definir' })
  @IsString()
  @IsPhoneNumber()
  @IsOptional()
  telefono: string = 'sin definir';

  @ApiPropertyOptional({ description: 'Dirección del proveedor', default: 'sin definir' })
  @IsString()
  @IsOptional()
  direccion: string = 'sin definir';

  @ApiPropertyOptional({ description: 'Email del proveedor', default: 'sin definir' })
  @IsString()
  @IsEmail()
  @IsOptional()
  email: string = 'sin definir';
}

// create-proveedor-dto.ts
export class CreateProveedorDto {
  nombre: string;
  encargado: string;
  telefono: string;
  Departamento: string;
  Municipio: string;
  direccion: string;
  email?: string;
}