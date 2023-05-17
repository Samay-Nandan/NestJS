import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from '@src/app.module';
import { PORT } from '@src/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useLogger(new Logger(undefined, { timestamp: true }));
  await app.listen(PORT);
  Logger.log(
    `Application Running on http://localhost:${PORT}`,
    'NestApplication',
  );
}
bootstrap();
