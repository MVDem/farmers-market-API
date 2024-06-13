import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OffersService } from './offers.service';
import { Offer } from './offers.model';
import { CreateOfferDto } from './dtos/createOffer.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/auth/user-self.decorator';
import { RolesGuard } from 'src/auth/roles.quard';
import { ISearchParams } from './offers.service';
import { UpdateOfferDto } from './dtos/updateOffer.dto';

@ApiTags('Offers')
@Controller('offers')
export class OffersController {
  constructor(private OffersService: OffersService) {}

  @ApiOperation({ summary: 'Get list of offers with pagination and sorting' })
  @ApiResponse({ status: 200, type: Offer })
  @Get()
  getPaginatedSortedOffers(
    @Query('limit') limit: number = 10,
    @Query('page') page: number = 1,
    @Query('sortBy') sortBy: string = 'createdAt',
    @Query('order') order: string = 'ASC',
    @Query('columnName') columnName: string = '',
    @Query('value') value: string = '',
  ) {
    return this.OffersService.getPaginatedSortedOffers(
      limit,
      page,
      sortBy,
      order,
      columnName,
      value,
    );
  }

  @ApiOperation({ summary: 'Create Offer' })
  @ApiResponse({ status: 201, type: Offer })
  @Roles('FARMER')
  @UseGuards(RolesGuard)
  @UseInterceptors(FileInterceptor('file'))
  @Post()
  create(
    @Req() req,
    @Body() dto: CreateOfferDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const farmerId = req.user.farmer.id;
    return this.OffersService.create(farmerId, dto, file);
  }

  @ApiOperation({ summary: 'Update Offer' })
  @ApiResponse({ status: 200, type: Offer })
  @Roles('FARMER')
  @UseGuards(RolesGuard)
  @UseInterceptors(FileInterceptor('file'))
  @Put(':id')
  update(
    @Req() req,
    @Param('id') id: string,
    @Body() dto: UpdateOfferDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log('dto:', dto);
    console.log('dto:', JSON.stringify(dto));
    const farmerId: number = req.user.farmer.id;
    return this.OffersService.update(+id, farmerId, dto, file);
  }

  @ApiOperation({ summary: 'Delete Offer' })
  @ApiResponse({ status: 204, type: Offer })
  @Roles('FARMER')
  @UseGuards(RolesGuard)
  @Delete(':id')
  delete(@Req() req, @Param('id') id: string) {
    const farmerId = req.user.farmer.id;
    return this.OffersService.delete(+id, farmerId);
  }

  @ApiOperation({ summary: 'Get one offer by id' })
  @ApiResponse({ status: 200, type: Offer })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.OffersService.getById(+id);
  }
}
