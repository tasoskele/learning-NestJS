import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './product.entity';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.appService.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: number): Promise<Product> {
    return this.appService.getProduct(id);
  }

  @Post()
  createProduct(@Body() product: Product): Promise<Product> {
    return this.appService.createProduct(product);
  }

  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() product: Product): Promise<Product> {
    return this.appService.updateProduct(id, product);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number): Promise<void> {
    return this.appService.deleteProduct(id);
  }
}
