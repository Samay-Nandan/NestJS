import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from './dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async create(product: CreateProductDto) {
    return await this.productRepository.save(product);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: string) {
    return await this.productRepository.findOneBy({ id });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const existingProduct = await this.findOne(id);
    if (!existingProduct) return `Product ${id} doesn't exists`;
    return await this.productRepository.save({
      ...existingProduct,
      ...updateProductDto,
    });
  }

  async remove(id: string) {
    await this.productRepository.delete({ id });
    return `Product ${id} deleted Successfully`;
  }
}
