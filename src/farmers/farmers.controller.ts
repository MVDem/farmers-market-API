import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FarmersService } from './farmers.service';
import { EditFarmerDto } from './dtos/editFarmer.dto';
import { CreateFarmerDto } from './dtos/createFarmer.dto';
import { Farmer } from './farmers.model';
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
  updateFarmer(@Req() req, @Body() updateDto: EditFarmerDto) {
    const id = req.user.id;
    return this.farmersService.updateFarmer(updateDto, id);
  }

  @ApiOperation({ summary: 'Get Farmer' })
  @ApiResponse({ status: 200, type: Farmer })
  @UseGuards(JwtAuthGuard)
  @Get()
  // @ApiParam({
  //   name: 'id',
  //   required: true,
  //   example: 'F-123',
  // })
  getFarmer(@Req() req) {
    const id = req.user.id;
    return this.farmersService.getOne(id);
  }

  @ApiOperation({ summary: 'Delete Farmer' })
  @ApiResponse({ status: 200, type: Farmer })
  @UseGuards(JwtAuthGuard)
  @Delete()
  // @ApiParam({
  //   name: 'id',
  //   required: true,
  //   example: 'F-123',
  // })
  deleteFarmer(@Req() req) {
    const id = req.user.id;
    return this.farmersService.deleteFarmer(id);
  }
}
