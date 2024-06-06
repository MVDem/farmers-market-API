import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dtos/createCategory.dto';
import { EditCategoryDto } from './dtos/editCategory.dto';
import { Category } from './categories.model';

@ApiTags('Category')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Create Category' })
  @ApiResponse({ status: 201, type:Category })
  @Post()
  createProduct(@Body() createDto: CreateCategoryDto) {
    return this.categoriesService.create(createDto);
  }

  @ApiOperation({ summary: 'Update Category' })
  @ApiResponse({ status: 200, type:Category })
  @Post(':id')
  updateProduct(@Body() updateDto: EditCategoryDto, @Param('id') id: string) {
    return this.categoriesService.updateProduct(updateDto, id);
  }

  @ApiOperation({ summary: 'Get Category' })
  @ApiResponse({ status: 200, type:Category })
  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    example: '123',
  })
  getProduct(@Param('id') id: string) {
    return this.categoriesService.getOne(+id);
  }

  @ApiOperation({ summary: 'Delete Category' })
  @ApiResponse({ status: 200, type:Category })
  @Delete(':id')
  @ApiParam({
    name: 'id',
    required: true,
    example: '123',
  })
  deleteProduct(@Param('id') id: string) {
    return this.categoriesService.deleteCategory(id);
  }
 
}