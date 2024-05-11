import { Module } from '@nestjs/common';
import { DealsController } from './deals.controller';
import { DealsService } from './deals.service';
import { Deal } from './deal.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [DealsController],
  providers: [DealsService],
  imports: [SequelizeModule.forFeature([Deal])],
})
export class DealsModule {}
