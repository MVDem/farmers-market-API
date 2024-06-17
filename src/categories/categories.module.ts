import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './categories.model';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [SequelizeModule.forFeature([Category]), CloudinaryModule],
})
export class CategoriesModule {}
