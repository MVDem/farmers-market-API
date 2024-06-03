import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Req,
  UseGuards,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FarmersService } from './farmers.service';
import { EditFarmerDto } from './dtos/editFarmer.dto';
// import { CreateFarmerDto } from './dtos/createFarmer.dto';
import { Farmer } from './farmers.model';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@ApiTags('Farmers')
@Controller('farmers')
export class FarmersController {
  constructor(private farmersService: FarmersService) {}

  // @ApiOperation({ summary: 'Create Farmer' })
  // @ApiResponse({ status: 201, type: Farmer })
  // @Post()
  // createFarmer(@Body() updateDto: CreateFarmerDto) {
  //   return this.farmersService.createFarmer(updateDto);
  // }

  @ApiOperation({ summary: 'Update Farmer' })
  @ApiResponse({ status: 200, type: Farmer })
  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  update(
    @UploadedFile() file: Express.Multer.File,
    @Req() req,
    @Body() updateDto: EditFarmerDto, // Check farmer id
  ) {
    const id = req.user.id;
    return this.farmersService.updateFarmer(updateDto, id, file);
  }

  @ApiOperation({ summary: 'Get Farmer' })
  @ApiResponse({ status: 200, type: Farmer })
  @UseGuards(JwtAuthGuard)
  @Get()
  getFarmer(@Req() req) {
    const id = +req.user.id;
    return this.farmersService.getOne(id);
  }

  // @ApiOperation({ summary: 'Delete Farmer' })
  // @ApiResponse({ status: 200, type: Farmer })
  // @UseGuards(JwtAuthGuard)
  // @Delete()
  // deleteFarmer(@Req() req) {
  //   const id = req.user.id;
  //   return this.farmersService.deleteFarmer(id);
  // }
}
