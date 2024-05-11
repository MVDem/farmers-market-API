import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OffersService } from './offers.service';
import { Offer } from './offers.model';
import { CreateOfferDto } from './dtos/createOffer.dto';

@ApiTags('Offers')
@Controller('offers')
export class OffersController {
  constructor(private OffersService: OffersService) {}

  @ApiOperation({ summary: 'Create Offer' })
  @ApiResponse({ status: 201, type: Offer })
  @Post()
  create(@Body() createDto: CreateOfferDto) {
    return this.OffersService.create(createDto);
  }
}
