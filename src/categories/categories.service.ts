import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EditCategoryDto } from './dtos/editCategory.dto';
import { Category } from './categories.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCategoryDto } from './dtos/createCategory.dto';

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Category) private categoryRepository: typeof Category) {}

  async create(dto: CreateCategoryDto) {
    const category = await this.categoryRepository.create(dto);
    if (!category) {
      throw new HttpException(
        'The category was not created',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log('Create category:', category);
    return category;
  }

  async updateCategory(dto: EditCategoryDto , id: string){
    const isUpdated = await this.categoryRepository.update(dto, {
        where: { id },
      });
      if (isUpdated[0] === 0) {
        throw new HttpException(
          'Category with this id is not found',
          HttpStatus.NOT_FOUND,
        );
      } else {
        const category = await this.categoryRepository.findOne({ where: { id } });
        console.log('Update category:', category);
        return category;
      }
    }

    async getOne(id: number) {
        const category = await this.categoryRepository.findOne({ where: { id } });
        if (!category) {
          throw new HttpException(
            'Category with this id is not found',
            HttpStatus.NOT_FOUND,
          );
        }
        console.log('Get category by id:', category);
        return category;
      }
    
      async deleteCategory(id: string) {
        const category = await this.categoryRepository.destroy({ where: { id } });
        if (!category) {
          throw new HttpException(
            'Farmer with this id is not found',
            HttpStatus.NOT_FOUND,
          );
        }
        console.log('Delete category by id:', category);
        return category;
      }
}
