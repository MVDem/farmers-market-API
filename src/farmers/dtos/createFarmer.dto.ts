import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateFarmerDto {
  @ApiProperty({
    example: 'farmer@mail.ru',
    description: 'Email should be an email',
    required: false,
  })
  @IsEmail({}, { message: 'Email is not correct' })
  email: string;

  @ApiProperty({
    example: '123',
    description: 'Id of the user who is a farmer',
    required: false,
  })
  @IsString({ message: 'Id must be a string' })
  userId: string;
}
