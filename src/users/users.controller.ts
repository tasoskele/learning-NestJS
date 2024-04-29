import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

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