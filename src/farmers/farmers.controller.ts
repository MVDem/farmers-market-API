import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FarmersService } from './farmers.service';
import { EditFarmerDto } from './dtos/editFarmer.dto';
import { CreateFarmerDto } from './dtos/createFarmer.dto';
import { Farmer } from './farmers.model';

@ApiTags('Farmers')
@Controller('farmers')
export class FarmersController {
  constructor(private farmersService: FarmersService) {}

  @ApiOperation({ summary: 'Create Farmer' })
  @ApiResponse({ status: 201, type: Farmer })
  @Post()
  createFarmer(@Body() updateDto: CreateFarmerDto) {
    return this.farmersService.createFarmer(updateDto);
  }

  @ApiOperation({ summary: 'Update Farmer' })
  @ApiResponse({ status: 200, type: Farmer })
  @Post(':id')
  updateFarmer(@Param('id') id: string, @Body() updateDto: EditFarmerDto) {
    return this.farmersService.updateFarmer(updateDto, id);
  }

  @ApiOperation({ summary: 'Get Farmer' })
  @ApiResponse({ status: 200, type: Farmer })
  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    example: 'F-123',
  })
  getFarmer(@Param('id') id: string) {
    return this.farmersService.getOne(+id);
  }

  @ApiOperation({ summary: 'Delete Farmer' })
  @ApiResponse({ status: 200, type: Farmer })
  @Delete(':id')
  @ApiParam({
    name: 'id',
    required: true,
    example: 'F-123',
  })
  deleteFarmer(@Param('id') id: string) {
    return this.farmersService.deleteFarmer(id);
  }
}
