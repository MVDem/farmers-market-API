import { ApiProperty } from '@nestjs/swagger';

export class OfferDto {
  @ApiProperty({
    example: 'O-123',
    description: 'Offer id',
    required: true,
  })
  offerId: number;

  @ApiProperty({
    example: '100',
    description: 'Deal price',
    required: true,
  })
  price: number;

  @ApiProperty({
    example: 'kg',
    description: 'Deal unit',
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
  description_HEB?: string;

  @ApiProperty({
    example: 'http://',
    description: 'Custom product image URL',
    required: false,
  })
  image?: string;
}
