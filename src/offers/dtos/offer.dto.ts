import { ApiProperty } from '@nestjs/swagger';
import { FarmerDto } from 'src/farmers/dtos/farmer.dto';
import { ProductDto } from 'src/products/dtos/product.dto';

export class OfferDto {
  @ApiProperty({
    example: 123,
    description: 'Offer id',
    required: true,
  })
  id: number;

  @ApiProperty({
    example: 'Tomato',
    description: 'name_EN must be a string and max 15 symbols',
    required: true,
  })
  name_EN: string;

  @ApiProperty({
    example: 'Tomato',
    required: false,
  })
  name_HE: string;

  @ApiProperty({
    example: '100',
    description: 'Offer price',
    required: true,
  })
  price: number;

  @ApiProperty({
    example: 'kg',
    description: 'Offer unit',
    required: true,
  })
  unit: string;

  @ApiProperty({
    example: 'true',
    description: 'Display/Hide deal on the market',
    required: false,
  })
  isActive?: boolean;

  @ApiProperty({
    example: 'Lorem ',
    description: 'English description for product',
    required: false,
  })
  description_EN?: string;

  @ApiProperty({
    example: 'Lorem ',
    description: 'Hebrew description for product',
    required: false,
  })
  description_HE?: string;

  @ApiProperty({
    example: 'http://',
    description: 'Custom product image URL',
    required: false,
  })
  image?: string;

  // @ForeignKey(() => Farmer)
  // @Column({ type: DataType.INTEGER })
  // farmerId: number;

  // @BelongsTo(() => Farmer)
  // farmer: Farmer;

  // @ForeignKey(() => Product)
  // @Column({ type: DataType.INTEGER })
  // productId: number;

  // @BelongsTo(() => Product, { foreignKey: 'productId', targetKey: 'id' })
  // product: Product;  
}
