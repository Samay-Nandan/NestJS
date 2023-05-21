import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from '@src/environment';
import { ProductModule } from '@src/product/product.module';
import { RoutesMiddleware } from '@src/middleware';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), ProductModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RoutesMiddleware).forRoutes('*');
  }
}
