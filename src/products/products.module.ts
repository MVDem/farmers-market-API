import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './products.model';
import { OffersModule } from 'src/offers/offers.module';
import { Offer } from 'src/offers/offers.model';
import { Farmer } from 'src/farmers/farmers.model';


@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  
  imports: [
    SequelizeModule.forFeature([Product, Offer, Farmer]),
  ],
  exports: [ProductsService],
})
export class ProductsModule {}
