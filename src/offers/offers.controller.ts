import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
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
import { editOfferDto } from './dtos/editOffer.dto';
import { Roles } from 'src/auth/user-self.decorator';
import { RolesGuard } from 'src/auth/roles.quard';

@ApiTags('Offers')
@Controller('offers')
export class OffersController {
  constructor(private OffersService: OffersService) {}

  @ApiOperation({ summary: 'Create Offer' })
  @ApiResponse({ status: 201, type: Offer })
  // @Roles('FARMER')
  // @UseGuards(RolesGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Req() req,
    @Body() createDto: CreateOfferDto,
  ) {
    const farmerId = req.user.farmer.id;
    return this.OffersService.create(createDto, farmerId, file);
  }

  @ApiOperation({ summary: 'Update Offer' })
  @ApiResponse({ status: 200, type: Offer })
  // @Roles('FARMER')
  // @UseGuards(RolesGuard)
  @Post('update')
  @UseInterceptors(FileInterceptor('file'))
  update(
    @UploadedFile() file: Express.Multer.File,
    @Req() req,
    @Body() updateDto: editOfferDto,
  ) {
    const farmerId = req.user.farmer.id;
    return this.OffersService.update(updateDto, farmerId, file);
  }

  @ApiOperation({ summary: 'Get one offer by id' })
  @ApiResponse({ status: 200, type: Offer })
  @Get('one/:id')
  getOfferById(@Param('id') offerId: string) {
    return this.OffersService.getById(+offerId);
  }

  @ApiOperation({ summary: "Get all farmer's offers" })
  @ApiResponse({ status: 200, type: Offer })
  @Get('allByFarmer/:id')
  getAllByFarmer(@Param('id') farmerId: string) {
    return this.OffersService.getAllByFarmer(+farmerId);
  }

  @ApiOperation({ summary: 'Delete Offer' })
  @ApiResponse({ status: 200, type: Offer })
  // @Roles('FARMER')
  // @UseGuards(RolesGuard)
  @Delete(':id')
  delete(@Req() req, @Param('id') offerId: string) {
    const farmerId = +req.user.farmer.id;
    return this.OffersService.delete(farmerId, +offerId);
  }

  @ApiOperation({ summary: 'Get list of offers with pagination and sorting' })
  @ApiResponse({ status: 200, type: Offer })
  @Get()
  getPaginatedSortedOffers(
    @Query('pageNumber') pageNumber: number,
    @Query('pageSize') pageSize: number,
    @Query('sortBy') sortBy?: string,
    @Query('order') order?: string,
  ) {
    return this.OffersService.getPaginatedSortedOffers(
      pageNumber,
      pageSize,
      sortBy,
      order,
    );
  }
}
