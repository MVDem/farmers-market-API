import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ValidateNested } from 'class-validator';
import { ProductDto } from './product.dto';
import { Type } from 'class-transformer';

export class ListProductDto {
  @ApiProperty({ type: [String] })
  names: string[];
}

/*
export class ListProductDto {
  @ApiProperty({
    example: [{nameENG: 'Coffe-Jacobs-20gr'}],
    description: 'List of product',
    required: true,
    type: [ProductDto]
  })
  
  @IsArray()
  @ValidateNested()
  @Type(() => ProductDto)
  products: ProductDto[];
}*/

//---ОТБОРА ПО КАТЕГОРИЯМ???