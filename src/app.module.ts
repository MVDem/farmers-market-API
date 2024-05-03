import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FarmersModule } from './farmers/farmers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    FarmersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
