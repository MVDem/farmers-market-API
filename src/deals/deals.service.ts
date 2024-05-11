import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDealDto } from './dtos/createDeal.dto';
import { Deal } from './deal.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DealsService {
  constructor(@InjectModel(Deal) private DealRepository: typeof Deal) {}

  async create(dto: CreateDealDto) {
    const deal = await this.DealRepository.create(dto);
    if (!deal) {
      throw new HttpException(
        'The farmer was not created',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log('Create farmer:', deal);
    return deal;
  }
}
