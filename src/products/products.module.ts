import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './products.model';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],

  imports: [SequelizeModule.forFeature([Product]), CloudinaryModule],
})
export class ProductsModule {}
