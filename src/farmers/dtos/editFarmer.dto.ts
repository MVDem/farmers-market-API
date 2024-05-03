import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumber,
  IsString,
  Length,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class EditFarmerDto {
  @ApiProperty({
    example: "Bob's ferma",
    description: 'Full name ',
  })
  @IsString({ message: 'Name must be a string' })
  @MaxLength(15, {
    message: 'Name must be max 15 simbols ',
  })
  @IsOptional()
  readonly name: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    description: 'Description must be a string and max 150 simbols',
  })
  @IsString({ message: 'Description must be a string' })
  @MaxLength(150, {
    message: 'Description must be max 150 simbols',
  })
  @IsOptional()
  description: string;

  @ApiProperty({
    example: 'Qiryat Shemona',
    description: 'City name must be a string and max 15 simbols',
  })
  @IsString({ message: 'City name must be a string' })
  @MaxLength(15, {
    message: 'Name must be max 15 simbols ',
  })
  @IsOptional()
  city: string;

  @ApiProperty({
    example: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    description: 'Address must be a string and max 50 simbols',
  })
  @IsString({ message: 'Address must be a string' })
  @MaxLength(50, {
    message: 'Address must be max 50 simbols',
  })
  @IsOptional()
  address: string;

  @ApiProperty({
    example: 'farmer@mail.ru',
    description: 'Email should be an email',
  })
  @IsEmail({}, { message: 'Email is not correct' })
  @IsOptional()
  email: string;

  @ApiProperty({
    example: '055 555 5555',
    description: 'Phone should be an number',
  })
  @IsNumber({}, { message: 'Phone is not a number' })
  @Length(10)
  @IsOptional()
  phone: number;

  @ApiProperty({
    example: '739745.6585827',
    description: 'Coordinate latitude should be a number',
  })
  @IsNumber({}, { message: 'Coordinate latitude is not a number' })
  @IsOptional()
  coordinateLat: number;

  @ApiProperty({
    example: '3677220.3427914',
    description: 'Coordinate longitude should be a number',
  })
  @IsNumber({}, { message: 'Coordinate longitude is not a number' })
  @IsOptional()
  coordinateLong: number;
}
