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
import { Roles } from 'src/auth/user-self.decorator';
import { RolesGuard } from 'src/auth/roles.quard';

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
  @Roles('FARMER')
  @UseGuards(RolesGuard)
  @Post()
  @UseInterceptors(FileInterceptor('logo'))
  @UseInterceptors(FileInterceptor('cover'))
  update(
    @Req() req,
    @Body() updateDto: EditFarmerDto, // Check farmer id
    @UploadedFile() logo?: Express.Multer.File,
    @UploadedFile() cover?: Express.Multer.File,
  ) {
    const id = req.user.id;
    return this.farmersService.updateFarmer(updateDto, id, logo, cover);
  }

  @ApiOperation({ summary: 'Get Farmer' })
  @ApiResponse({ status: 200, type: Farmer })
  // @UseGuards(JwtAuthGuard)
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

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: Farmer })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get('/all')
  // @ApiParam({
  //   name: 'id',
  //   required: true,
  //   example: 'F-123',
  // })
  getAllUsers() {
    return this.farmersService.getAll();
  }
}
