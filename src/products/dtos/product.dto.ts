import { ApiProperty, OmitType } from '@nestjs/swagger';
import { CategoryDto } from 'src/categories/dtos/category.dto';
import { EditProductDto } from './editProduct.dto';

export class ProductDto extends OmitType(EditProductDto, ['categoryId']){
  @ApiProperty({
    example: 123,
    description: 'Product id',
    required: true,
  })
  id: number;

  @ApiProperty({
    example: 'Coffe-Jacobs-20gr',
    description: 'Category ',
    required: true,
  })
  category: CategoryDto;

  constructor(data: Partial<ProductDto>) {
    super();
    Object.assign(this, data);
  }

}
