import { Module, forwardRef } from '@nestjs/common';
import { FarmersController } from './farmers.controller';
import { FarmersService } from './farmers.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Farmer } from './farmers.model';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { AuthModule } from '../auth/auth.module';
import { Auth } from '../auth/auth.model';

@Module({
  controllers: [FarmersController],
  providers: [FarmersService],
  imports: [
    SequelizeModule.forFeature([Farmer, Auth]),
    CloudinaryModule,
    forwardRef(() => AuthModule),
  ],
  exports: [FarmersService],
})
export class FarmersModule {}
