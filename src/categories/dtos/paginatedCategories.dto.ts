import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ValidateNested } from 'class-validator';
import { CategoryDto } from './category.dto';
import { Type } from 'class-transformer';

export class PaginatedCategoryDto {
  @ApiProperty({
    example: [
      {
        nameENG: 'nameENG',
        nameHEB: 'nameHEB',
        imageURL: 'https://cloudinary.com/.../categories/public_id.jpg',
        description_HEB: 'Lorem ',
        descriptionHEB: 'Lorem',
      },
    ],
    description: 'List of categories',
    required: true,
    type: [CategoryDto],
  })
  @IsArray()
  @ValidateNested()
  @Type(() => CategoryDto)
  categories: CategoryDto[];

  @ApiProperty({
    example: 1,
    description: 'Count page',
    required: true,
  })
  count: number;
}
