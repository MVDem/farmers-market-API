import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  UploadedFile,
  UseInterceptors,
  Param,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FarmersService } from './farmers.service';
import { EditFarmerDto } from './dtos/editFarmer.dto';
import { Farmer } from './farmers.model';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from '../auth/user-self.decorator';
import { RolesGuard } from '../auth/roles.quard';

@ApiTags('Farmers')
@Controller('farmers')
export class FarmersController {
  constructor(private farmersService: FarmersService) {}

  @ApiOperation({ summary: 'Update Farmer' })
  @ApiResponse({ status: 200, type: Farmer })
  @Roles('FARMER')
  @UseGuards(RolesGuard)
  @Put('/:id')
  @UseInterceptors(FileInterceptor('logo'))
  @UseInterceptors(FileInterceptor('cover'))
  update(
    @Req() req,
    @Body() updateDto: EditFarmerDto, // Check farmer id
    @UploadedFile() logo?: Express.Multer.File,
    @UploadedFile() cover?: Express.Multer.File,
  ) {
    const id = req.user.id;
    console.log('updateDto', updateDto);
    return this.farmersService.updateFarmer(updateDto, id, logo, cover);
  }

  @ApiOperation({ summary: 'Get Farmer' })
  @ApiResponse({ status: 200, type: Farmer })
  @Get('/one/:id')
  getFarmer(@Param('id') id: string) {
    return this.farmersService.getOne(+id);
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
  getAllUsers() {
    return this.farmersService.getAll();
  }
}
