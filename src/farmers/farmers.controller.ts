import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FarmersService } from './farmers.service';
import { SignFarmerDto } from './dtos/sign.dto';
import { EditFarmerDto } from './dtos/editFarmer.dto';

@ApiTags('Админ')
@Controller('farmers')
export class FarmersController {
  constructor(private farmersService: FarmersService) {}

  @ApiOperation({ summary: 'Login' })
  @ApiResponse({ status: 201 }) //create and add type: Farmer
  @Post('/signIn')
  signIn(@Body() signDto: SignFarmerDto) {
    return this.farmersService.signIn(signDto);
  }

  @ApiOperation({ summary: 'Register' })
  @ApiResponse({ status: 201 }) //create and add type: Farmer
  @Post('/signUp')
  signUp(@Body() signDto: SignFarmerDto) {
    return this.farmersService.signUp(signDto);
  }

  @ApiOperation({ summary: 'Update Farmer' })
  @ApiResponse({ status: 201 }) //create and add type: Farmer
  @Post()
  updateFarmer(@Body() updateDto: EditFarmerDto) {
    return this.farmersService.updateFarmer(updateDto);
  }

  @ApiOperation({ summary: 'Get Farmer' })
  @ApiResponse({ status: 201 }) //create and add type: Farmer
  @Get(':id')
  getFarmer(@Param('id') id: string) {
    return this.farmersService.getOne(id);
  }

  @ApiOperation({ summary: 'Delete Farmer' })
  @ApiResponse({ status: 201 }) // create and add type: Farmer
  @Delete(':id')
  deleteFarmer(@Param('id') id: string) {
    return this.farmersService.deleteFarmer(id);
  }
}
