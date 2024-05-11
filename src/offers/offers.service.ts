import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Offer } from './offers.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOfferDto } from './dtos/createOffer.dto';

@Injectable()
export class OffersService {
  constructor(@InjectModel(Offer) private OffersRepository: typeof Offer) {}

  async create(dto: CreateOfferDto) {
    const offer = await this.OffersRepository.create(dto);
    if (!offer) {
      throw new HttpException(
        'The offer was not created',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log('Create farmer:', offer);
    return offer;
  }
}
