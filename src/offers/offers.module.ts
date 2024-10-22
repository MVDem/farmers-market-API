import { Module, forwardRef } from '@nestjs/common';
import { OffersService } from './offers.service';
import { Offer } from './offers.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { OffersController } from './offers.controller';
import { AuthModule } from '../auth/auth.module';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  controllers: [OffersController],
  providers: [OffersService],
  imports: [
    SequelizeModule.forFeature([Offer]),
    CloudinaryModule,
    forwardRef(() => AuthModule),
  ],
})
export class OffersModule {}
