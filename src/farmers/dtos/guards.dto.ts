import { ApiProperty } from '@nestjs/swagger';
import { Farmer } from '../farmers.model';
import { IsOptional } from 'class-validator';

export class guardsDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'email' })
  readonly email: string;
  @ApiProperty({ example: '11', description: 'id from table Users' })
  readonly id: string;
  @ApiProperty({ example: 'castomer | farmer', description: 'User role' })
  readonly role: string;
  @ApiProperty({ example: 'object', description: 'object Farmer' })
  @IsOptional()
  readonly farmer: Farmer;
}
