import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from '@src/environment';
import { ProductModule } from './product/product.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), ProductModule],
})
export class AppModule {}
