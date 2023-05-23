import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from '@src/app.module';
import { PORT } from '@src/environment';
import { GlobalExceptionFilter } from '@src/exceptionFilter';
import { SetupSwagger } from '@src/swagger';
import { GlobalInterceptor } from '@src/interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useLogger(new Logger(undefined, { timestamp: true }));
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalInterceptors(new GlobalInterceptor());
  SetupSwagger(app);
  await app.listen(PORT);
  Logger.log(
    `Application Running on http://localhost:${PORT}`,
    'NestApplication',
  );
  Logger.log(
    `Swagger Running on http://localhost:${PORT}/swagger`,
    'NestApplication',
  );
}
bootstrap();
