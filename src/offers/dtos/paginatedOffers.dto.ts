import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ValidateNested } from 'class-validator';
import { OfferDto } from './offer.dto';
import { Type } from 'class-transformer';

export class PaginatedOfferDto {
  @ApiProperty({
    example: [{offerId: 'O-123', price: '100', unit: 'kg',  isActive: true, description_EN: 'Lorem ', description_HEB: 'Lorem ', image: 'http://'}],
    description: 'List of offers',
    required: true,
    type: [OfferDto]
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
}
