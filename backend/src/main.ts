import { NestFactory, Reflector } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppModule } from '@src/app.module';
import { APP_URL, PORT } from '@src/config';
import { GlobalExceptionFilter } from '@src/exceptionFilter';
import { SetupSwagger } from '@src/swagger';
import { GlobalInterceptor } from '@src/interceptor';
import { AuthGuard } from '@src/middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useLogger(new Logger(undefined, { timestamp: true }));
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalInterceptors(new GlobalInterceptor());
  app.useGlobalGuards(new AuthGuard(new JwtService(), new Reflector()));
  await SetupSwagger(app);
  await app.listen(PORT);
  Logger.log(`Application Running on ${APP_URL}`, 'NestApplication');
  Logger.log(`Swagger Running on ${APP_URL}swagger`, 'NestApplication');
}
bootstrap();
