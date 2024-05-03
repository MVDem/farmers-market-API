import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length, Min } from 'class-validator';

export class SignFarmerDto {
  @ApiProperty({
    example: 'farmer@mail.ru',
    description: 'login should be an email',
  })
  @IsEmail({}, { message: 'Email is not correct' })
  readonly login: string;

  @ApiProperty({
    example: '1q2w3e',
    description: 'Password must be a string, at least 8 simbols ',
  })
  @IsString({ message: 'Password must be a string' })
  @Min(8, {
    message: 'Password must be min 8 simbols ',
  })
  readonly password: string;
}
