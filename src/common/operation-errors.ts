import { BadRequestException, ConflictException, HttpException, NotFoundException, ServiceUnavailableException } from '@nestjs/common';

// Conserva los mensajes de negocio y traduce errores conocidos sin exponer SQL.
export function rethrowKnownError(error: unknown): void {
  if (error instanceof HttpException) throw error;
  const code = (error as { code?: string } | null)?.code;
  switch (code) {
    case 'P2002':
      throw new ConflictException('Ya existe un registro con esos datos únicos. Revisa los datos antes de guardar.');
    case 'P2003':
      throw new BadRequestException('La operación tiene registros relacionados que no existen o impiden el cambio. Revisa los datos seleccionados.');
    case 'P2025':
      throw new NotFoundException('El registro que intentas modificar ya no existe. Actualiza la lista y vuelve a intentarlo.');
    case 'P2034':
      throw new ConflictException('Otro usuario modificó los datos al mismo tiempo. Actualiza la información y vuelve a intentarlo.');
    case 'P1001':
    case 'P1002':
    case 'P2024':
      throw new ServiceUnavailableException('No se pudo acceder a los datos en este momento. Inténtalo de nuevo.');
  }
}
