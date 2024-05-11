import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DealsService } from './deals.service';
import { Deal } from './deal.model';
import { CreateDealDto } from './dtos/createDeal.dto';

@ApiTags('Deals')
@Controller('deals')
export class DealsController {
  constructor(private dealsService: DealsService) {}

  @ApiOperation({ summary: 'Create Deal' })
  @ApiResponse({ status: 201, type: Deal })
  @Post()
  createProduct(@Body() createDto: CreateDealDto) {
    return this.dealsService.create(createDto);
  }
}
