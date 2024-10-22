import { ApiProperty } from '@nestjs/swagger';

export class CategoryDto {
  @ApiProperty({
    example: '123',
    description: 'Category id',
    required: true,
  })
  id: number;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'Description must be a string and max 150 symbols',
    required: false,
  })
  name_EN: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'Description must be a string and max 150 symbols',
    required: false,
  })
  name_HE: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'Description must be a string and max 150 symbols',
    required: true,
  })
  description_EN: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'Description must be a string and max 150 symbols',
    required: false,
  })
  description_HE: string;

  @ApiProperty({
    example: 'categories/public_id.jpg',
    description: 'Public id of image of category',
    required: false,
  })
  imageURL: string;

  constructor(data: Partial<CategoryDto>) {
    Object.assign(this, data);
  }
}
