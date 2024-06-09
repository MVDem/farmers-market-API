import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Query,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { EditCategoryDto } from './dtos/editCategory.dto';
import { Category } from './categories.model';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Create Category' })
  @ApiResponse({ status: 201, type: Category })
  @Post()
  editCategory(@Body() createDto: EditCategoryDto) {
    return this.categoriesService.create(createDto);
  }

  @ApiOperation({ summary: 'Update Category' })
  @ApiResponse({ status: 200, type: Category })
  @Post(':id')
  updateCategory(@Body() updateDto: EditCategoryDto, @Param('id') id: string) {
    return this.categoriesService.updateCategory(updateDto, id);
  }

  @ApiOperation({ summary: 'Get Category' })
  @ApiResponse({ status: 200, type: Category })
  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    example: '123',
  })
  getCategory(@Param('id') id: string) {
    return this.categoriesService.getOne(+id);
  }

  @ApiOperation({ summary: 'Delete Category' })
  @ApiResponse({ status: 200, type: Category })
  @Delete(':id')
  @ApiParam({
    name: 'id',
    required: true,
    example: '123',
  })
  deleteCategory(@Param('id') id: string) {
    return this.categoriesService.deleteCategory(id);
  }

  @ApiOperation({
    summary: 'Get list of categories with pagination and sorting',
  })
  @ApiResponse({ status: 200, type: Category })
  @Get()
  getPaginatedSortedCategories(
    @Query('pageNumber') pageNumber: number,
    @Query('pageSize') pageSize: number,
    @Query('sortBy') sortBy?: string,
    @Query('order') order?: string,
  ) {
    return this.categoriesService.getPaginatedSortedCategories(
      pageNumber,
      pageSize,
      sortBy,
      order,
    );
  }
}
