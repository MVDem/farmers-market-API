import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ValidateNested } from 'class-validator';
//import { ProductDto } from './product.dto';
import { Type } from 'class-transformer';

export class ListProductDto {
  @ApiProperty({ type: [String] })
  names: string[];
}
