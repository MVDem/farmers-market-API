import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ValidateNested } from 'class-validator';
import { OfferDto } from './offer.dto';
import { Type } from 'class-transformer';

export class PaginatedOfferDto {
  @ApiProperty({
    example: [
      {
        id: 123,
        name_EN: 'Tomatos',
        name_HE: 'עגבנייה',
        price: '100',
        unit: 'kg',
        isActive: true,
        description_EN: 'Fresh and juicy tomatoes',
        description_HE: 'עגבניות טריות ומעולות',
        imageURL: 'offers/tomatos.png',
      },
    ],
    description: 'List of offers',
    required: true,
    type: [OfferDto],
  })
  @IsArray()
  @ValidateNested()
  @Type(() => OfferDto)
  offers: OfferDto[];

  @ApiProperty({
    example: 1,
    description: 'Current page',
    required: true,
  })
  count: number;

  constructor(data: Partial<PaginatedOfferDto>) {
    Object.assign(this, data);
  }
}
