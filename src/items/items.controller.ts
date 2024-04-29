import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getAll() {
    // Implement your logic here
  }

  @Post()
  create() {
    // Implement your logic here
  }

  @Put()
  update() {
    // Implement your logic here
  }

  @Delete()
  delete() {
    // Implement your logic here
  }
}