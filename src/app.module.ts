import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { FarmersModule } from './farmers/farmers.module';
import { Farmer } from './farmers/farmers.model';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth/auth.model';
import { Product } from './products/products.model';
import { ProductsModule } from './products/products.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { Offer } from './offers/offers.model';
import { OffersModule } from './offers/offers.module';
//--add 06-06-2024 + new obj.category
import { Category } from './categories/categories.model';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRootAsync({
      useFactory: () => {
        let options: Record<string, unknown> = {};

        if (process.env.NODE_ENV === 'development') {
          options = {
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Auth, Farmer, Offer, Product, Category],
            autoLoadModels: true,
            synchronize: true,
            logging: false,
          };
        } else {
          options = {
            dialect: 'postgres',
            models: [Auth, Farmer, Offer, Product, Category],
            autoLoadModels: true,
            synchronize: true,
            logging: false,
            uri: process.env.POSTGRES_URI,
          };
        }

        return options;
      },
    }),
    // SequelizeModule.forRoot({
    //   dialect: 'postgres',
    //   host: process.env.POSTGRES_HOST,
    //   port: Number(process.env.POSTGRES_PORT),
    //   username: process.env.POSTGRES_USER,
    //   password: process.env.POSTGRES_PASSWORD,
    //   database: process.env.POSTGRES_DB,
    //   models: [Auth, Farmer, Offer, Product, Category],
    //   autoLoadModels: true,
    //   synchronize: true,
    //   logging: false,
    // }),
    AuthModule,
    FarmersModule,
    ProductsModule,
    OffersModule,
    CategoriesModule,
    CloudinaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
