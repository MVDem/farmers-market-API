import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateFarmerDto {
  @ApiProperty({
    example: 'farmer@mail.ru',
    description: 'Email should be an email',
    required: false,
  })
  @IsEmail({}, { message: 'Email is not correct' })
  email: string;
}
