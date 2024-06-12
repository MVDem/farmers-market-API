import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MaxLength, IsOptional } from 'class-validator';

export class CreateOfferDto {
  @ApiProperty({
    example: 'Tomato',
    description: 'name_EN must be a string and max 15 symbols',
    required: true,
  })
  @IsString({ message: 'name_EN must be a string' })
  @MaxLength(15, {
    message: 'name_EN must be max 15 symbols',
  })
  name_EN: string;

  @ApiProperty({
    example: 'Tomato',
    required: false,
  })
  @IsString({ message: 'name_HE must be a string' })
  @MaxLength(15, {
    message: 'name_HE must be max 15 symbols',
  })
  name_HE: string;

  @ApiProperty({
    example: 100,
    description: 'Offer price',
    required: true,
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 'kg',
    description: 'Offer unit',
    required: true,
  })
  @IsString({ message: 'Unit must be a string' })
  @MaxLength(5, {
    message: 'Unit must be max 5 symbols',
  })
  unit: string;

  @ApiProperty({
    example: 'http://',
    description: 'Custom product image URL',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'Image must be a string' })
  imageURL: string;

  @ApiProperty({
    example: 'true',
    description: 'Display/Hide deal on the market',
    required: false,
  })
  @IsOptional()
  isActive: boolean;

  @ApiProperty({
    example: 'Lorem ',
    description: 'English descroption for product',
    required: false,
  })
  @IsString({ message: 'Description must be a string' })
  @MaxLength(150, {
    message: 'Description must be max 150 symbols',
  })
  @IsOptional()
  description_EN: string;

  @ApiProperty({
    example: 'Lorem ',
    description: 'Hebrew descroption for product',
    required: false,
  })
  @IsString({ message: 'Description must be a string' })
  @MaxLength(150, {
    message: 'Description must be max 150 symbols',
  })
  @IsOptional()
  description_HE: string;

  @ApiProperty({
    example: '123',
    description: 'Farmer id',
    required: true,
  })
  @IsNumber({}, { message: 'Farmer id must be a number' })
  farmerId: number;

  @ApiProperty({
    example: '12',
    description: 'Product id',
    required: true,
  })
  @IsNumber({}, { message: 'Product id must be a number' })
  productId: number;
}
