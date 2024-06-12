import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/createProduct.dto';
import { EditProductDto } from './dtos/editProduct.dto';
import { Product } from './products.model';
import { FileInterceptor } from '@nestjs/platform-express/multer';

@ApiTags('Product')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiOperation({ summary: 'Create Product' })
  @ApiResponse({ status: 201, type: Product })
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  createProduct(
    @UploadedFile() file: Express.Multer.File,
    @Body() createDto: CreateProductDto,
  ) {
    return this.productsService.create(createDto, file);
  }

  @ApiOperation({ summary: 'Update Product' })
  @ApiResponse({ status: 200, type: Product })
  @Post(':id')
  updateProduct(@Body() updateDto: EditProductDto, @Param('id') id: string) {
    return this.productsService.updateProduct(updateDto, id);
  }

  @ApiOperation({ summary: 'Get Product' })
  @ApiResponse({ status: 200, type: Product })
  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    example: '123',
  })
  getProduct(@Param('id') id: string) {
    return this.productsService.getOne(+id);
  }

  @ApiOperation({ summary: 'Delete Product' })
  @ApiResponse({ status: 200, type: Product })
  @Delete(':id')
  @ApiParam({
    name: 'id',
    required: true,
    example: '123',
  })
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(id);
  }
}
