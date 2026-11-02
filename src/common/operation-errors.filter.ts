import { ArgumentsHost, Catch, ExceptionFilter, HttpException, InternalServerErrorException, Logger } from '@nestjs/common';
import { rethrowKnownError } from './operation-errors';

@Catch()
export class OperationErrorsFilter implements ExceptionFilter {
  private readonly logger = new Logger(OperationErrorsFilter.name);

  catch(error: unknown, host: ArgumentsHost) {
    let responseError: HttpException = new InternalServerErrorException('No se pudo completar la operación. Inténtalo de nuevo.');
    try {
      rethrowKnownError(error);
      this.logger.error(error);
    } catch (knownError) {
      responseError = knownError as HttpException;
    }
    const body = responseError.getResponse();
    host.switchToHttp().getResponse().status(responseError.getStatus()).json(
      typeof body === 'string' ? { statusCode: responseError.getStatus(), message: body } : body,
    );
  }
}
