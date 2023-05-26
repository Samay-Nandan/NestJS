import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
  BadRequestException,
} from '@nestjs/common';
import { PORT } from '@src/environment';
import { IBadRequestException } from './dto';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  getErrorMessage = (exception: any) => {
    if (exception instanceof BadRequestException)
      return (exception.getResponse() as IBadRequestException).message;

    return exception.message || 'Internal server error';
  };
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const { url, method, body } = request;
    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = this.getErrorMessage(exception);

    const data = {
      status: false,
      url: `http://localhost:${PORT}${url}`,
      method,
      body,
      message,
      timestamp: new Date().toISOString(),
    };

    Logger.error(`${method} ${url}, Error: ${message}`, 'HTTP');

    response.status(statusCode).json(data);
  }
}
