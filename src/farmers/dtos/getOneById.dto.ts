import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class getOneByIdDto {
  @ApiProperty({
    example: 'F-123456',
    description: 'id of farmer',
  })
  @IsString({ message: 'Id must be a string' })
  readonly id: string;
}
