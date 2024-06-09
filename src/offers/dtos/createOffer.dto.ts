import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MaxLength, IsOptional } from 'class-validator';

export class CreateOfferDto {
  @ApiProperty({
    example: 'P-123',
    description: 'Product id',
    required: true,
  })
  @IsString({ message: 'Product id must be a string' })
  @MaxLength(10, {
    message: 'Product id must be max 10 simbols',
  })
  productId: string;

  @ApiProperty({
    example: '100',
    description: 'Deal price',
    required: true,
  })
  @IsString({ message: 'Price must be a string' })
  price: string;

  @ApiProperty({
    example: 'kg',
    description: 'Deal unit',
    required: true,
  })
  @IsString({ message: 'Unit must be a string' })
  @MaxLength(5, {
    message: 'Unit must be max 5 simbols',
  })
  unit: string;

  @ApiProperty({
    example: 'http://',
    description: 'Custom product image URL',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'Image must be a string' })
  image: string;

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
    message: 'Description must be max 150 simbols',
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
    message: 'Description must be max 150 simbols',
  })
  @IsOptional()
  description_HE: string;
}
