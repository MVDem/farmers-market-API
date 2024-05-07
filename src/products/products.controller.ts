import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/createProduct.dto';
import { EditProductDto } from './dtos/editProduct.dto';
import { Product } from './products.model';

@ApiTags('Product')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiOperation({ summary: 'Create Product' })
  @ApiResponse({ status: 201, type:Product })
  @Post()
  createProduct(@Body() createDto: CreateProductDto) {
    return this.productsService.create(createDto);
  }

  @ApiOperation({ summary: 'Update Product' })
  @ApiResponse({ status: 200, type:Product })
  @Post(':id')
  updateProduct(@Body() updateDto: EditProductDto, @Param('id') id: string) {
    return this.productsService.updateProduct(updateDto, id);
  }

  @ApiOperation({ summary: 'Get Product' })
  @ApiResponse({ status: 200, type:Product })
  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    example: 'F-123',
  })
  getProduct(@Param('id') id: string) {
    return this.productsService.getOne(+id);
  }

  @ApiOperation({ summary: 'Delete Product' })
  @ApiResponse({ status: 200, type:Product })
  @Delete(':id')
  @ApiParam({
    name: 'id',
    required: true,
    example: 'F-123',
  })
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(id);
  }
 
}