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
import { EditOfferDto } from './dtos/editOffer.dto';
import { Roles } from 'src/auth/user-self.decorator';
import { RolesGuard } from 'src/auth/roles.quard';
import { ISearchParams } from './offers.service';

@ApiTags('Offers')
@Controller('offers')
export class OffersController {
  constructor(private OffersService: OffersService) {}

  // @ApiOperation({ summary: 'Create Offer' })
  // @ApiResponse({ status: 201, type: Offer })
  // // @Roles('FARMER')
  // @UseGuards(RolesGuard)
  // @UseInterceptors(FileInterceptor('file'))
  // @Post()
  // create(
  //   @UploadedFile() file: Express.Multer.File,
  //   @Req() req,
  //   @Body() createDto: CreateOfferDto,
  // ) {
  //   const farmerId = req.user.farmer.id;
  //   return this.OffersService.create(createDto, farmerId, file);
  // }

  // @ApiOperation({ summary: 'Update Offer' })
  // @ApiResponse({ status: 200, type: Offer })
  // @Roles('FARMER')
  // @UseGuards(RolesGuard)
  // @UseInterceptors(FileInterceptor('file'))
  // @Put(':id')
  // update(
  //   @UploadedFile() file: Express.Multer.File,
  //   @Req() req,
  //   @Body() updateDto: EditOfferDto,
  // ) {
  //   const farmerId = req.user.farmer.id;
  //   return this.OffersService.update(updateDto, farmerId, file);
  // }

  // @ApiOperation({ summary: 'Get one offer by id' })
  // @ApiResponse({ status: 200, type: Offer })
  // @Get(':id')
  // getOfferById(@Param('id') id: string) {
  //   return this.OffersService.getById(+id);
  // }

  // @ApiOperation({ summary: "Get all farmer's offers" })
  // @ApiResponse({ status: 200, type: Offer })
  // @Get('allByFarmer/:id')
  // getAllByFarmer(@Param('id') farmerId: string) {
  //   return this.OffersService.getAllByFarmer(+farmerId);
  // }

  // @ApiOperation({ summary: 'Delete Offer' })
  // @ApiResponse({ status: 200, type: Offer })
  // @Roles('FARMER')
  // @UseGuards(RolesGuard)
  // @Delete(':id')
  // delete(@Req() req, @Param('id') id: string) {
  //   const farmerId = +req.user.farmer.id;
  //   return this.OffersService.delete(farmerId, +id);
  // }

  @ApiOperation({ summary: 'Get list of offers with pagination and sorting' })
  @ApiResponse({ status: 200, type: Offer })
  @Get()
  getPaginatedSortedOffers(
    @Query('search') search: ISearchParams,
    @Query('pageNumber') pageNumber: number = 1,
    @Query('pageSize') pageSize: number = 10,
    @Query('sortBy') sortBy: string = 'id',
    @Query('order') order: string = 'ASC',
  ) {
    return this.OffersService.getPaginatedSortedOffers(
      search,
      pageNumber,
      pageSize,
      sortBy,
      order,
    );
  }
}
