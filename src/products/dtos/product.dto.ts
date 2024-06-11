import { ApiProperty } from '@nestjs/swagger';
import { CategoryDto } from 'src/categories/dtos/category.dto';

export class ProductDto {
  @ApiProperty({
    example: 123,
    description: 'Product id',
    required: true,
  })
  id: number;

  @ApiProperty({
    example: 'Coffe-Jacobs-20gr',
    description: 'Category ',
    required: true,
  })
  category: CategoryDto;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'name_EN must be a string and max 150 symbols',
    required: true,
  })
  name_EN: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'name_HE must be a string and max 150 symbols',
    required: false,
  })
  name_HE: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'description_EN must be a string and max 150 symbols',
    required: true,
  })
  description_EN: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'description_HE must be a string and max 150 symbols',
    required: false,
  })
  description_HE: string;

  @ApiProperty({
    example: 'http://Photo.com/photo.jpg',
    description: 'Photo URL must be a string and max 15 symbols',
    required: false,
  })
  imageURL: string;
}
