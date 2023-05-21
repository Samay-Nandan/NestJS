import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { PORT, GetEnvironment } from '@src/environment';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const { url, method, body } = request;
    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = exception.message || 'Internal server error';

    const data = {
      status: false,
      url: `http://localhost:${PORT}${url}`,
      method,
      body,
      message,
      timestamp: new Date().toISOString(),
    };

    if (exception instanceof QueryFailedError && GetEnvironment)
      return response
        .status(statusCode)
        .json({ data: { ...data, query: exception.query } });

    response.status(statusCode).json({ data });
  }
}
