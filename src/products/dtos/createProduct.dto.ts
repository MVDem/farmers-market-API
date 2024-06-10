import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumber,
  IsString,
  Length,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Coffe-Jacobs-20gr',
    description: 'Full name',
    required: false,
  })
  @IsString({ message: 'Category must be a string' })
  @MaxLength(50, {
    message: 'category must be max 50 symbols ',
  })
  category: string;

  @ApiProperty({
    example: 'lorem ipsum ',
    description: 'name_EN must be a string and max 15 symbols',
    required: true,
  })
  @IsString({ message: 'name_EN must be a string' })
  @MaxLength(15, {
    message: 'name_EN must be max 15 symbols',
  })
  @IsOptional()
  name_EN: string;

  @ApiProperty({
    example: 'lorem ipsum',
    required: false,
  })
  @IsString({ message: 'name_HE must be a string' })
  @MaxLength(15, {
    message: 'name_HE must be max 15 symbols',
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
    description: 'Photo url must be a string and max 15 symbols',
    required: false,
  })
  @IsString({ message: 'Photo url must be a string' })
  @MaxLength(150, {
    message: 'Photo url must be max 15 symbols ',
  })
  photo: string;
}
