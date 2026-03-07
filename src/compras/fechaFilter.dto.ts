import { IsDateString, IsOptional } from 'class-validator';

export class FiltrarComprasDto {
  @IsDateString()
  fechaInicio: string;

  @IsDateString()
  @IsOptional()
  fechaFin: string;
}

