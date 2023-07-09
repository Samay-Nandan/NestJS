import { Injectable, NotFoundException } from '@nestjs/common';
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
    return await this.productRepository.save(
      this.productRepository.create(product),
    );
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: string) {
    return await this.productRepository.findOneBy({ id });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const existingProduct = await this.findOne(id);
    if (!existingProduct)
      throw new NotFoundException(`Product id:${id} doesn't exists`);
    return await this.productRepository.save(
      this.productRepository.create({
        ...existingProduct,
        ...updateProductDto,
      }),
    );
  }

  async remove(id: string) {
    const product = await this.productRepository.delete({ id });
    if (!product.affected)
      throw new NotFoundException(`Product id:${id} doesn't exists`);
    return `Product ${id} deleted Successfully`;
  }
}
