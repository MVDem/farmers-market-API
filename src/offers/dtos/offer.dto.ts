import { ApiProperty, OmitType } from '@nestjs/swagger';
import { FarmerDto } from '../../farmers/dtos/farmer.dto';
import { ProductDto } from '../../products/dtos/product.dto';
import { CreateOfferDto } from './createOffer.dto';

export class OfferDto extends OmitType(CreateOfferDto, [
  'farmerId',
  'productId',
]) {
  @ApiProperty({
    example: 123,
    description: 'Offer id',
    required: true,
  })
  id: number;

  @ApiProperty({
    description: 'FarmerDto object',
    required: true,
  })
  farmer: FarmerDto;

  @ApiProperty({
    description: 'ProductDto object',
    required: true,
  })
  product: ProductDto;

  constructor(data: Partial<OfferDto>) {
    super();
    Object.assign(this, data);
  }
}
