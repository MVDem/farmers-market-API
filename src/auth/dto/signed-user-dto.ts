import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignedUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'email' })
  readonly email: string;
  @ApiProperty({ example: 'castomer | farmer', description: 'User role' })
  readonly role: string;
}
