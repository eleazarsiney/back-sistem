import { BadRequestException, HttpException } from '@nestjs/common';
import { rethrowKnownError } from './operation-errors';
import { OperationErrorsFilter } from './operation-errors.filter';

describe('Errores de operaciones', () => {
  it('conserva mensajes de validación', () => {
    const error = new BadRequestException('Disponible: 5, solicitado: 6');
    expect(() => rethrowKnownError(error)).toThrow(error);
  });
  it.each([['P2002', 409], ['P2003', 400], ['P2025', 404], ['P2034', 409], ['P1001', 503]])('traduce %s sin exponer detalles internos', (code, status) => {
    try {
      rethrowKnownError({ code, message: 'SQL secreto' });
      throw new Error('Debió lanzar una excepción');
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.getStatus()).toBe(status);
      expect(error.message).not.toContain('SQL secreto');
    }
  });
  it('devuelve el motivo y estado HTTP en la respuesta global', () => {
    const response = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    new OperationErrorsFilter().catch(new BadRequestException('Stock disponible: 5'), {
      switchToHttp: () => ({ getResponse: () => response }),
    } as any);
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith(expect.objectContaining({ message: 'Stock disponible: 5' }));
  });
});
