import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  createProduct() {
    return 'This action adds a new product';
  }

  @Get()
  findAllProducts() {
    return 'This action returns all products';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return the product ${id}`;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return `This action removes the product ${id}`;
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() body: any) {
    return `This action updates the product ${id}`;
  }

  @Patch('available/:id')
  updateAvailable(@Param('id') id: string) {
    return `This action updates the available of the product ${id}`;
  }
}
