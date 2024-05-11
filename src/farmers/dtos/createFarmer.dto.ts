import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber } from 'class-validator';

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
  @IsNumber({}, { message: 'UserId is not a number' })
  userId: number;
}
