import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumber,
  IsString,
  Length,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class EditProductDto {
  @ApiProperty({
    example: 'Coffe-Jacobs-20gr',
    description: 'Full name ',
    required: false,
  })
  @IsString({ message: 'Category must be a string' })
  @MaxLength(15, {
    message: 'Name must be max 15 simbols ',
  })
  category: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'Description must be a string and max 150 simbols',
    required: true,
  })
  @IsString({ message: 'NameENG must be a string' })
  @MaxLength(150, {
    message: 'Description must be max 150 simbols',
  })
  @IsOptional()
  nameENG: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'Description must be a string and max 150 simbols',
    required: false,
  })
  @IsString({ message: 'NameHEB must be a string' })
  @MaxLength(150, {
    message: 'NameHEB must be max 150 simbols',
  })
  @IsOptional()
  nameHEB: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'Description must be a string and max 150 simbols',
    required: true,
  })
  @IsString({ message: 'Description must be a string' })
  @MaxLength(150, {
    message: 'Description must be max 150 simbols',
  })
  @IsOptional()
  descriptionENG: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'Description must be a string and max 150 simbols',
    required: false,
  })
  @IsString({ message: 'Description must be a string' })
  @MaxLength(150, {
    message: 'Description must be max 150 simbols',
  })
  @IsOptional()
  descriptionHEB: string;

  @ApiProperty({
    example: 'http://Photo.com/photo.jpg',
    description: 'City name must be a string and max 15 simbols',
    required: false,
  })
  @IsString({ message: 'Photo must be a string' })
  @MaxLength(15, {
    message: 'Name must be max 15 simbols ',
  })
  photo: string;
}
