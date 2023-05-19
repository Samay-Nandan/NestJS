import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from '@src/app.module';
import { PORT } from '@src/environment';
import { GlobalExceptionFilter } from '@src/error';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useLogger(new Logger(undefined, { timestamp: true }));
  app.useGlobalFilters(new GlobalExceptionFilter());
  await app.listen(PORT);
  Logger.log(
    `Application Running on http://localhost:${PORT}`,
    'NestApplication',
  );
}
bootstrap();
