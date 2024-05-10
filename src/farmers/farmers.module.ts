import { Module } from '@nestjs/common';
import { FarmersController } from './farmers.controller';
import { FarmersService } from './farmers.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Farmer } from './farmers.model';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  controllers: [FarmersController],
  providers: [FarmersService],
  imports: [SequelizeModule.forFeature([Farmer]), CloudinaryModule],
})
export class FarmersModule {}
