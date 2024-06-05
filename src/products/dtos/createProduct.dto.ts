import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsOptional,

} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Coffe-Jacobs-20gr',
    description: 'Full name ',
    required: false,
  })
  @IsNotEmpty({ message: 'Category must be Not empty' })
  @IsString({ message: 'Category must be a string' })
  @MaxLength(50, {
    message: 'Category must be max 50 simbols ',
  })
  category: string;

  @ApiProperty({
    example: 'lorem ipsum ',
    description: 'nameENG must be a string and max 15 simbols',
    required: true,
  })
  
  @IsNotEmpty({ message: 'NameENG must be Not empty' })
  @IsString({ message: 'NameENG must be a string' })
  @MaxLength(15, {
    message: 'NameENG must be max 15 simbols',
  })
  // @IsOptional()
  nameENG: string;

  @ApiProperty({
    example: 'lorem ipsum ',
    description: 'NameHEB must be a string and max 15 simbols',
    required: false,
  })
  @IsString({ message: 'NameHEB must be a string' })
  @MaxLength(15, {
    message: 'NameHEB must be max 15 simbols',
  })
  @IsOptional()
  nameHEB: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'DescriptionENG must be a string and max 150 simbols',
    required: true,
  })
  @IsNotEmpty({ message: 'DescriptionENG must be Not empty' })
  @IsString({ message: 'DescriptionENG must be a string' })
  @MaxLength(150, {
    message: 'DescriptionENG must be max 150 simbols',
  })
  @IsOptional()
  descriptionENG: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'DescriptionHEB must be a string and max 150 simbols',
    required: false,
  })
  @IsString({ message: 'DescriptionHEB must be a string' })
  @MaxLength(150, {
    message: 'DescriptionHEB must be max 150 simbols',
  })
  @IsOptional()
  descriptionHEB: string;

  @ApiProperty({
    example: 'http://Photo.com/photo.jpg',
    description: 'Photo url must be a string and max 150 simbols',
    required: false,
  })
  @IsString({ message: 'Photo url must be a string' })
  @MaxLength(150, {
    message: 'Photo url must be max 150 simbols ',
  })
  photo: string;
}
