import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, IsOptional } from 'class-validator';
import { Unique } from 'sequelize-typescript';

export class EditCategoryDto {
  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'Description must be a string and max 150 symbols',
    required: true,
  })
  @IsString({ message: 'NameENG must be a string' })
  @MaxLength(150, {
    message: 'NameENG must be max 150 symbols',
  })
  @IsOptional()
  name_EN: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'Description must be a string and max 150 symbols',
    required: false,
  })
  @IsString({ message: 'NameHEB must be a string' })
  @MaxLength(150, {
    message: 'NameHEB must be max 150 symbols',
  })
  @IsOptional()
  name_HE: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'Description must be a string and max 150 symbols',
    required: true,
  })
  @IsString({ message: 'DescriptionENG must be a string' })
  @MaxLength(150, {
    message: 'DescriptionENG must be max 150 symbols',
  })
  @IsOptional()
  description_EN: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'Description must be a string and max 150 symbols',
    required: false,
  })
  @IsString({ message: 'DescriptionHEB must be a string' })
  @MaxLength(150, {
    message: 'DescriptionHEB must be max 150 symbols',
  })
  @IsOptional()
  description_HE: string;

  @ApiProperty({
    example: 'categories/public_id.jpg',
    description: 'Public id of image of category',
    required: false,
  })
  @IsString({ message: 'Public id of image of category must be a string' })
  @MaxLength(150, {
    message: 'Public id of image of category max 150 symbols ',
  })
  @IsOptional()
  imageURL: string;
}
