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
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
            host: process.env.POSTGRES_HOST,
            dialectOptions: {
              ssl: {
                require: true,
                rejectUnauthorized: false,
              },
            },
            models: [Auth, Farmer, Offer, Product, Category],
            autoLoadModels: true,
            synchronize: true,
            logging: false,
          };
        } else {
          console.log(process.env);
          options = {
            dialect: 'postgres',
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
            host: process.env.POSTGRES_HOST,
            dialectOptions: {
              ssl: {
                require: true,
                rejectUnauthorized: false,
              },
            },
            models: [Auth, Farmer, Offer, Product, Category],
            autoLoadModels: true,
            synchronize: true,
            logging: false,
          };
        }

        return options;
      },
    }),
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
