import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateOfferDto } from './createOffer.dto';

export class EditOfferDto extends PartialType(CreateOfferDto) {
  @ApiProperty({
    example: 123,
    description: 'Offer id',
    required: true,
  })
  @IsNumber({}, { message: 'Offer Id must be a number' })
  id: number;
}
