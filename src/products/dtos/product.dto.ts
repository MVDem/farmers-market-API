import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty({
    example: '4',
    description: 'Product id',
    required: true,
  })
  id: number;

  @ApiProperty({
    example: 'Coffe-Jacobs-20gr',
    description: 'Full name ',
    required: false,
  })
  category: string;

  @ApiProperty({
    example: 'lorem ipsum ',
    description: 'nameENG must be a string and max 15 simbols',
    required: true,
  })
  nameENG: string;

  @ApiProperty({
    example: 'lorem ipsum ',
    description: 'NameHEB must be a string and max 15 simbols',
    required: false,
  })
  nameHEB: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'DescriptionENG must be a string and max 150 simbols',
    required: true,
  })
  descriptionENG: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'DescriptionHEB must be a string and max 150 simbols',
    required: false,
  })
  descriptionHEB: string;

  @ApiProperty({
    example: 'http://Photo.com/photo.jpg',
    description: 'Photo url must be a string and max 150 simbols',
    required: false,
  })
  photo: string;
}
