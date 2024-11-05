import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  getAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  getProduct(id: number): Promise<Product> {
    return this.productRepository.findOneBy({id})
  }

  createProduct(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  async updateProduct(id: number, product: Product): Promise<Product> {
    await this.productRepository.update(id, product);
    return this.productRepository.findOneBy({id});
  }

  async deleteProduct(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
