import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { FarmersModule } from '../farmers/farmers.module';
import { Auth } from './auth.model';
import { Farmer } from '../farmers/farmers.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    SequelizeModule.forFeature([Auth, Farmer]),
    CloudinaryModule,
    // forwardRef(() => UsersModule),
    forwardRef(() => FarmersModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
