import { Module, forwardRef } from '@nestjs/common';
import { OffersService } from './offers.service';
import { Offer } from './offers.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { OffersController } from './offers.controller';
import { AuthModule } from 'src/auth/auth.module';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { Farmer } from 'src/farmers/farmers.model';
import { Product } from 'src/products/products.model';

@Module({
  controllers: [OffersController],
  providers: [OffersService],
  imports: [
    SequelizeModule.forFeature([Offer, Farmer, Product]),
    CloudinaryModule,
    forwardRef(() => AuthModule),
  ],
  exports: [SequelizeModule], // Экспортируйте SequelizeModule, если он используется в других модулях

})
export class OffersModule {}
