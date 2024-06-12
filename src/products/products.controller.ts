import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
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
    @Body() createDto: CreateProductDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.productsService.create(createDto, file);
  }

  @ApiOperation({ summary: 'Update Product' })
  @ApiResponse({ status: 200, type: Product })
  @UseInterceptors(FileInterceptor('file'))
  @Put(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateDto: EditProductDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.productsService.updateProduct(+id, updateDto, file);
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
