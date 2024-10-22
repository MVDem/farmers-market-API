import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ValidateNested } from 'class-validator';
import { CategoryDto } from './category.dto';
import { Type } from 'class-transformer';

export class PaginatedCategoryDto {
  @ApiProperty({
    example: [
      {
        name_EN: 'name_EN',
        name_HE: 'name_HE',
        imageURL: 'https://cloudinary.com/.../categories/public_id.jpg',
        description_EN: 'Lorem ',
        description_HE: 'Lorem',
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
