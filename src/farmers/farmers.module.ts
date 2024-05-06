import { Module } from '@nestjs/common';
import { FarmersController } from './farmers.controller';
import { FarmersService } from './farmers.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Farmer } from './farmers.model';

@Module({
  controllers: [FarmersController],
  providers: [FarmersService],
  imports: [SequelizeModule.forFeature([Farmer])],
})
export class FarmersModule {}
