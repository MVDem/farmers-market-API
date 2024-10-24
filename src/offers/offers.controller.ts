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
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from '../auth/user-self.decorator';
import { RolesGuard } from '../auth/roles.quard';
import { UpdateOfferDto } from './dtos/updateOffer.dto';
import { plainToClass } from 'class-transformer';

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
    // @Body() dto: CreateOfferDto,
    @Body() body: any,
    @UploadedFile() file: Express.Multer.File,
  ) {
    body.farmerId = +body.farmerId;
    body.productId = +body.productId;
    body.isActive = true;
    body.price = +body.price;
    const dto = plainToClass(UpdateOfferDto, body);
    const farmerId = +req.user.farmer.id;
    return this.OffersService.create(farmerId, dto, file);
  }

  @ApiOperation({ summary: 'Update Offer' })
  @ApiResponse({ status: 200, type: Offer })
  @Roles('FARMER')
  @UseGuards(RolesGuard)
  @UseInterceptors(FileInterceptor('file'))
  @Put(':id')
  update(
    @UploadedFile() file: Express.Multer.File,
    @Req() req,
    @Param('id') id: string,
    @Body() body: any,
  ) {
    const updateOfferDto = plainToClass(UpdateOfferDto, body);
    const farmerId: number = req.user.farmer.id;
    console.log(updateOfferDto);
    return this.OffersService.update(+id, farmerId, updateOfferDto, file);
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
