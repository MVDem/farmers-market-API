import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignInUserDto {
  @ApiProperty({
    example: 'farmer@mail.ru',
    description: 'login should be an email',
    required: true,
  })
  @IsEmail({}, { message: 'Email is not correct' })
  readonly email: string;

  @ApiProperty({
    example: '1q2w3e',
    description: 'Password must be a string, at least 8 simbols ',
    required: true,
  })
  @IsString({ message: 'Password must be a string' })
  @MinLength(6, {
    message: 'Password must be min 6 simbols ',
  })
  readonly password: string;
}
