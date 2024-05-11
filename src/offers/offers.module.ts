import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { Offer } from './offers.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { OffersController } from './offers.controller';

@Module({
  controllers: [OffersController],
  providers: [OffersService],
  imports: [SequelizeModule.forFeature([Offer])],
})
export class OffersModule {}
