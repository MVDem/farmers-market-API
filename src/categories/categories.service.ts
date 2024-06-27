import {
  HttpException,
  ConflictException,
  HttpStatus,
  Injectable,
  Logger,
} from '@nestjs/common';
import { EditCategoryDto } from './dtos/editCategory.dto';
import { Category } from './categories.model';
import { InjectModel } from '@nestjs/sequelize';
import { UniqueConstraintError } from 'sequelize';
import { CategoryDto } from './dtos/category.dto';
import { PaginatedCategoryDto } from './dtos/paginatedCategories.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class CategoriesService {
  private readonly logger = new Logger(CategoriesService.name);

  constructor(
    @InjectModel(Category) private categoryRepository: typeof Category,
    private cloudinary: CloudinaryService,
  ) {}

  async create(dto: EditCategoryDto): Promise<CategoryDto> {
    try {
      const category = await this.categoryRepository.create(dto);
      console.log('Create category:', category);

      const categoryData: CategoryDto = {
        id: category.id,
        name_EN: category.name_EN,
        name_HE: category.name_HE,
        description_EN: category.description_EN,
        description_HE: category.description_HE,
        imageURL: category.imageURL,
      };
      return categoryData;
    } catch (error) {
      if (error instanceof UniqueConstraintError) {
        throw new ConflictException('Category with this name already exists');
      }
      throw new HttpException(
        'An error occurred while creating the category',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateCategory(dto: EditCategoryDto, id: string): Promise<CategoryDto> {
    try {
      const [numberOfAffectedRows] = await this.categoryRepository.update(dto, {
        where: { id },
      });

      if (numberOfAffectedRows === 0) {
        throw new HttpException(
          'Category with this id is not found',
          HttpStatus.NOT_FOUND,
        );
      }

      const category = await this.categoryRepository.findOne({ where: { id } });
      this.logger.log('Update category:', category);
      //--return category;

      const categoryData: CategoryDto = {
        id: category.id,
        name_EN: category.name_EN,
        name_HE: category.name_HE,
        description_EN: category.description_EN,
        description_HE: category.description_HE,
        imageURL: category.imageURL,
      };
      return categoryData;
    } catch (error) {
      this.logger.error('Error updating category:', error);
      if (error instanceof UniqueConstraintError) {
        throw new ConflictException('Category with this name already exists');
      }
      throw new HttpException(
        'An error occurred while updating the category',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getOne(id: number): Promise<CategoryDto> {
    try {
      const category = await this.categoryRepository.findOne({ where: { id } });
      if (!category) {
        throw new HttpException(
          'Category with this id is not found',
          HttpStatus.NOT_FOUND,
        );
      }
      this.logger.log('Get category by id:', category);

      const categoryData: CategoryDto = {
        id: category.id,
        name_EN: category.name_EN,
        name_HE: category.name_HE,
        description_EN: category.description_EN,
        description_HE: category.description_HE,
        imageURL: category.imageURL,
      };

      return categoryData;
    } catch (error) {
      this.logger.error('Error getting category by id:', error);
      throw new HttpException(
        'An error occurred while retrieving the category',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteCategory(id: string) {
    const category = await this.categoryRepository.destroy({ where: { id } });
    if (!category) {
      throw new HttpException(
        'Category with this id is not found',
        HttpStatus.NOT_FOUND,
      );
    }
    console.log('Deleted category by id:', category);
    return category;
  }

  async getPaginatedSortedCategories(
    pageNumber = 1,
    pageSize = 10,
    sortBy = 'id',
    order = 'ASC',
  ): Promise<PaginatedCategoryDto> {
    const offset = (pageNumber - 1) * pageSize;

    const response = await this.categoryRepository.findAndCountAll({
      offset,
      limit: pageSize,
      order: [[sortBy, order]],
    });

    if (!response) {
      throw new HttpException('Nothing to display', HttpStatus.NOT_FOUND);
    }
    const { count, rows } = response;

    // const categories: CategoryDto[] = rows.map(async (category) => {
    //   const { id, name_EN, name_HE, imageURL, description_EN, description_HE } =
    //     category;
    //   let newImageURL = imageURL
    //     ? await this.cloudinary.getPathToImg(imageURL)
    //     : null;
    //   return {
    //     id,
    //     name_EN,
    //     name_HE,
    //     imageURL: newImageURL,
    //     description_EN,
    //     description_HE,
    //   };
    // });

    const offersDto: CategoryDto[] = await Promise.all(
      rows.map(async (category) => {
        category.imageURL = category.imageURL
          ? await this.cloudinary.getPathToImg(category.imageURL)
          : null;

        return new CategoryDto({
          ...category.toJSON(),
        });
      }),
    );

    return {
      categories: offersDto,
      count,
    };
  }
}
