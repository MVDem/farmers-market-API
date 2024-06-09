import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Offer } from './offers.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOfferDto } from './dtos/createOffer.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { editOfferDto } from './dtos/editOffer.dto';
import { OfferDto } from './dtos/offer.dto';
import { PaginatedOfferDto } from './dtos/paginatedOffers.dto';
import { Farmer } from 'src/farmers/farmers.model';
import { Product } from 'src/products/products.model';

interface IOffer {
  unit?: string;
  price?: number;
  image?: string;
  isActive?: boolean;
  description_EN?: string;
  description_HEB?: string;
  farmerId?: number;
}

@Injectable()
export class OffersService {
  constructor(
    @InjectModel(Offer) private OffersRepository: typeof Offer,
    @InjectModel(Product) private ProductRepository: typeof Product,
    @InjectModel(Farmer) private farmerRepository: typeof Farmer,
    private cloudinary: CloudinaryService,
  ) {}

  async create(
    dto: CreateOfferDto,
    farmerId: number,
    file: Express.Multer.File,
  ) {
    const offerData = { ...dto, farmerId, price: +dto.price };
    const offer = await this.OffersRepository.create(offerData);
    if (!offer) {
      throw new HttpException(
        'The offer was not created',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (file) {
      const { public_id } = await this.uploadImageToCloudinary(
        file,
        offer.id.toString(),
      );
      offerData.image = public_id;
    }
    const isUpdated = await this.OffersRepository.update(offerData, {
      where: { id: offer.id },
    });
    if (isUpdated[0] === 0) {
      throw new HttpException("Photo didn't upload", HttpStatus.NOT_FOUND);
    }
    const updatedoffer = await this.OffersRepository.findOne({
      where: { id: offer.id },
    });
    console.log('Created offer:', updatedoffer);
    return updatedoffer;
  }

  async update(dto: editOfferDto, farmerId: number, file: Express.Multer.File) {
    const offer = await this.OffersRepository.findOne({
      where: { id: dto.offerId },
    });

    if (!offer) {
      throw new HttpException(
        'The offer was not founded',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (offer.farmerId !== farmerId) {
      throw new HttpException(
        'You are not the owner of this offer',
        HttpStatus.BAD_REQUEST,
      );
    }

    const offerData: IOffer = { ...dto, price: +dto.price || offer.price };

    if (file) {
      const { public_id } = await this.uploadImageToCloudinary(
        file,
        offer.id.toString(),
      );
      offerData.image = public_id;
    }

    const isUpdated = await this.OffersRepository.update(offerData, {
      where: { id: +offer.id },
    });
    if (isUpdated[0] === 0) {
      throw new HttpException(
        'The offer was not updated',
        HttpStatus.NOT_FOUND,
      );
    }

    const updatedoffer = await this.OffersRepository.findOne({
      where: { id: +offer.id },
    });
    console.log('Updated offer:', updatedoffer);
    return updatedoffer;
  }

  async getById(offerId: number) {
    const offer = await this.OffersRepository.findOne({
      where: { id: offerId },
      include: { all: true },
    });
    if (!offer) {
      throw new HttpException(
        'Offer with this id is not found',
        HttpStatus.NOT_FOUND,
      );
    }
    // if (offer.farmerId !== farmerId) {
    //   throw new HttpException(
    //     'You are not the owner of this offer',
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }
    console.log('Get offer by id:', offer);
    return offer;
  }

  async getAllByFarmer(farmer_Id: number) {
    const offers = await this.OffersRepository.findAll({
      where: { farmerId: farmer_Id },
    });
    if (!offers) {
      throw new HttpException('You have no offers', HttpStatus.NOT_FOUND);
    }
    console.log('Get offer by id:', offers);
    return offers;
  }

  async delete(farmerId: number, offerId: number) {
    const offer = await this.OffersRepository.findOne({
      where: { id: offerId },
    });
    if (!offer) {
      throw new HttpException(
        'Offer with this id is not found',
        HttpStatus.NOT_FOUND,
      );
    }
    if (offer.farmerId !== farmerId) {
      throw new HttpException(
        'You are not the owner of this offer',
        HttpStatus.BAD_REQUEST,
      );
    }
    const deletedOffer = await this.OffersRepository.destroy({
      where: { id: offerId },
    });
    if (!deletedOffer) {
      throw new HttpException(
        'Offer with this id is not found',
        HttpStatus.NOT_FOUND,
      );
    }
    console.log('Delete offer by id:', deletedOffer);
    return deletedOffer;
  }

  private async uploadImageToCloudinary(
    file: Express.Multer.File,
    offerId: string,
  ) {
    const result = await this.cloudinary.uploadImage(file, 'offers', offerId);
    console.log('Upload image:', result, file);
    if (!result) {
      throw new HttpException('Image was not uploaded', HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  async getPaginatedSortedOffers(
    pageNumber = 1,
    pageSize = 10,
    sortBy = 'id',
    order = 'ASC',
  ): Promise<PaginatedOfferDto> {
    const offset = (pageNumber - 1) * pageSize;

    const response = await this.OffersRepository.findAndCountAll({
      offset,
      limit: pageSize,
      order: [[sortBy, order]],
    });

    if (!response) {
      throw new HttpException('Nothing to display', HttpStatus.NOT_FOUND);
    }
    const { count, rows } = response;

    const offers: OfferDto[] = rows.map((offer) => {
      const {
        id,
        price,
        unit,
        isActive,
        description_EN,
        description_HEB,
        image,
      } = offer;
      return {
        offerId: id,
        price,
        unit,
        isActive,
        description_EN,
        description_HEB,
        image,
      };
    });

    return {
      offers,
      count,
    };
  }

  async getFullOffers() {
    try {
      const offers = await this.OffersRepository.findAll({
        include: [
          {
            model: Farmer,
            attributes: [
              'id',
              'name',
              'description',
              'city',
              'address',
              'email',
              'phone',
              'coordinateLat',
              'coordinateLong',
            ],
          },
          {
            model: Product,
            attributes: [
              'id',
              'category',
              'nameENG',
              'nameHEB',
              'photo',
              'descriptionENG',
              'descriptionHEB',
            ],
          },
        ],
      });
      return offers;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
