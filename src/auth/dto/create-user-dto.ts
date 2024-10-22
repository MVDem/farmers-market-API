import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'email' })
  readonly email: string;
  @ApiProperty({ example: '123456789', description: 'User password' })
  readonly password: string;
  @ApiProperty({ example: 'castomer | farmer', description: 'User role' })
  readonly role: string;
}
