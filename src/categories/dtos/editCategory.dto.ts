import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumber,
  IsString,
  Length,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class EditCategoryDto {
    @ApiProperty({
        example: "Coffe",
        description: 'Full name ',
        required: false,
      })
      @IsString({ message: 'Subcategory must be a string' })
      @MaxLength(15, {
        message: 'Subcategory must be max 15 simbols ',
      })
      subcategory: string;

      @ApiProperty({
        example:
          'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        description: 'Description must be a string and max 150 simbols',
        required: true,
      })
      @IsString({ message: 'NameENG must be a string' })
      @MaxLength(150, {
        message: 'NameENG must be max 150 simbols',
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
      @IsString({ message: 'DescriptionENG must be a string' })
      @MaxLength(150, {
        message: 'DescriptionENG must be max 150 simbols',
      })
      @IsOptional()
      descriptionENG: string;

      @ApiProperty({
        example:
          'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        description: 'Description must be a string and max 150 simbols',
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
        description: 'Photo url must be a string and max 15 simbols',
        required: false,
      })
      @IsString({ message: 'Photo url must be a string' })
      @MaxLength(15, {
        message: 'Photo url must be max 15 simbols ',
      })
      photo: string;

      


    }