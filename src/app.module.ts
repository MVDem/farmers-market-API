import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { FarmersModule } from './farmers/farmers.module';
import { Farmer } from './farmers/farmers.model';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth/auth.model';
import { DealsModule } from './deals/deals.module';
import { Farmer } from './farmers/farmers.model';
import { Deal } from './deals/deal.model';
import { Product } from './products/products.model';
import { ProductsModule } from './products/products.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Auth, Farmer, Deal, Product],
      autoLoadModels: true,
    }),
    FarmersModule,
    AuthModule,
    ProductsModule,
    DealsModule,
    CloudinaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
