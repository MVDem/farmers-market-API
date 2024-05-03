import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString, Length, Max } from 'class-validator';

export class SignFarmerDto {
  @ApiProperty({
    example: "Bob's ferma",
    description: 'Full name ',
  })
  @IsString({ message: 'Name must be a string' })
  @Max(15, {
    message: 'Name must be max 15 simbols ',
  })
  readonly name?: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'Description must be a string and max 150 simbols',
  })
  @IsString({ message: 'Description must be a string' })
  @Max(150, {
    message: 'Description must be max 150 simbols',
  })
  description?: string;

  @ApiProperty({
    example: 'Qiryat Shemona',
    description: 'City name must be a string and max 15 simbols',
  })
  @IsString({ message: 'City name must be a string' })
  @Max(15, {
    message: 'Name must be max 15 simbols ',
  })
  city?: string;

  @ApiProperty({
    example: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    description: 'Address must be a string and max 50 simbols',
  })
  @IsString({ message: 'Address must be a string' })
  @Max(50, {
    message: 'Address must be max 50 simbols',
  })
  address?: string;

  @ApiProperty({
    example: 'farmer@mail.ru',
    description: 'Email should be an email',
  })
  @IsEmail({}, { message: 'Email is not correct' })
  email?: string;

  @ApiProperty({
    example: '055 555 5555',
    description: 'Phone should be an number',
  })
  @IsNumber({}, { message: 'Phone is not a number' })
  @Length(10)
  phone?: number;

  @ApiProperty({
    example: '739745.6585827',
    description: 'Coordinate latitude should be a number',
  })
  @IsNumber({}, { message: 'Coordinate latitude is not a number' })
  coordinateLat?: number;

  @ApiProperty({
    example: '3677220.3427914',
    description: 'Coordinate longitude should be a number',
  })
  @IsNumber({}, { message: 'Coordinate longitude is not a number' })
  coordinateLong?: number;
}
