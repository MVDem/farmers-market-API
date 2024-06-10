import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MaxLength, IsOptional } from 'class-validator';

export class editOfferDto {
  @ApiProperty({
    example: 123,
    description: 'Offer id',
    required: true,
  })
  // @IsString({ message: 'Offer id must be a string' })
  @IsNumber({}, { message: 'Offer Id must be a number'})
  // @MaxLength(10, {
  //   message: 'Offer id must be max 10 symbols',
  // })
  id: number;

  @ApiProperty({
    example: '100',
    description: 'Offer price',
    required: true,
  })
  @IsString({ message: 'Price must be a string' })
  @IsOptional()
  price: string;

  @ApiProperty({
    example: 'kg',
    description: 'Offer unit',
    required: true,
  })
  @IsString({ message: 'Unit must be a string' })
  @MaxLength(5, {
    message: 'Unit must be max 5 symbols',
  })
  @IsOptional()
  unit: string;

  @ApiProperty({
    example: 'http://',
    description: 'Custom product image URL',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'Image must be a string' })
  @IsOptional()
  image: string;

  @ApiProperty({
    example: 'true',
    description: 'Display/Hide deal on the market',
    required: false,
  })
  @IsOptional()
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
    description: 'Hebrew description for product',
    required: false,
  })
  @IsString({ message: 'Description must be a string' })
  @MaxLength(150, {
    message: 'Description must be max 150 symbols',
  })
  @IsOptional()
  description_HE: string;
}
