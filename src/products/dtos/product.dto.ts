import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty({
    example: 'Coffe-Jacobs-20gr',
    description: 'Category ',
    required: false,
  })
  @IsNumber({}, { message: 'category must be a number' })
  categoryId: number;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'name_EN must be a string and max 150 symbols',
    required: true,
  })
  @IsString({ message: 'name_EN must be a string' })
  @MaxLength(150, {
    message: 'name_EN must be max 150 symbols',
  })
  @IsOptional()
  name_EN: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'name_HE must be a string and max 150 symbols',
    required: false,
  })
  @IsString({ message: 'name_HE must be a string' })
  @MaxLength(150, {
    message: 'name_HE must be max 150 symbols',
  })
  @IsOptional()
  name_HE: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'description_EN must be a string and max 150 symbols',
    required: true,
  })
  @IsString({ message: 'description_EN must be a string' })
  @MaxLength(150, {
    message: 'description_EN must be max 150 symbols',
  })
  @IsOptional()
  description_EN: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'description_HE must be a string and max 150 symbols',
    required: false,
  })
  @IsString({ message: 'description_HE must be a string' })
  @MaxLength(150, {
    message: 'description_HE must be max 150 symbols',
  })
  @IsOptional()
  description_HE: string;

  @ApiProperty({
    example: 'http://Photo.com/photo.jpg',
    description: 'Photo URL must be a string and max 15 symbols',
    required: false,
  })
  @IsString({ message: 'Photo URL must be a string' })
  @MaxLength(255, {
    message: 'Photo URL must be max 255 symbols ',
  })
  imageURL: string;
}
