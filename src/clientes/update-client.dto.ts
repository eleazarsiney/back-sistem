

export class UpdateClientDto {
  nombre?: string;
  encargado?: string;
  telefono?: string;
  Departamento?: string;
  Municipio?: string;
  direccion?: string;
  email?: string;
}
export class CreateClientDto {
  nombre: string;
  encargado: string;
  telefono: string;
  Departamento: string;
  Municipio: string;
  direccion: string;
  email?: string;
}