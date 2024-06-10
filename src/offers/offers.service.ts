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
import { Category } from 'src/categories/categories.model';

interface IOffer {
  unit?: string;
  price?: number;
  image?: string;
  isActive?: boolean;
  description_EN?: string;
  description_HE?: string;
  farmerId?: number;
}

@Injectable()
export class OffersService {
  constructor(
    @InjectModel(Offer) private OffersRepository: typeof Offer,
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
    let imageURL = '';

    if (file) {
      const { public_id, url } = await this.uploadImageToCloudinary(
        file,
        offer.id,
      );
      offerData.image = public_id;
      imageURL = url;
    }
    const isUpdated = await this.OffersRepository.update(offerData, {
      where: { id: offer.id },
    });
    if (isUpdated[0] === 0) {
      throw new HttpException("Photo didn't upload", HttpStatus.NOT_FOUND);
    }
    const updatedOffer = await this.OffersRepository.findOne({
      where: { id: offer.id },
    });

    if (!updatedOffer) {
      throw new HttpException('Updated offer not found', HttpStatus.NOT_FOUND);
    }

    const offerDto: OfferDto = {
      id: updatedOffer.id,
      price: updatedOffer.price,
      unit: updatedOffer.unit,
      isActive: updatedOffer.isActive,
      description_EN: updatedOffer.description_EN,
      description_HE: updatedOffer.description_HE,
      image: imageURL,
    };
    console.log('Created offer:', offerDto);
    return offerDto;
  }

  async update(dto: editOfferDto, farmerId: number, file: Express.Multer.File) {
    const offer = await this.OffersRepository.findOne({
      where: { id: dto.id },
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

    let imageURL = '';

    if (file) {
      const { public_id, url } = await this.uploadImageToCloudinary(
        file,
        offer.id,
      );
      offerData.image = public_id;
      imageURL = url;
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

    const updatedOffer = await this.OffersRepository.findOne({
      where: { id: +offer.id },
    });
    console.log('Updated offer:', updatedOffer);

    const offerDto: OfferDto = {
      id: updatedOffer.id,
      price: updatedOffer.price,
      unit: updatedOffer.unit,
      isActive: updatedOffer.isActive,
      description_EN: updatedOffer.description_EN,
      description_HE: updatedOffer.description_HE,
      image: imageURL,
    };
    return offerDto;
  }

  async getById(id: number) {
    const offer = await this.OffersRepository.findOne({
      where: { id: id },
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

    let publicId = offer.image;

    if (publicId) {
      publicId = await this.cloudinary.getPathToImg(publicId);
    }

    const offerDto: OfferDto = {
      id: offer.id,
      price: offer.price,
      unit: offer.unit,
      isActive: offer.isActive,
      description_EN: offer.description_EN,
      description_HE: offer.description_HE,
      image: publicId,
    };

    return offerDto;
  }

  async getAllByFarmer(farmer_Id: number) {
    const offers = await this.OffersRepository.findAll({
      where: { farmerId: farmer_Id },
    });
    if (!offers) {
      throw new HttpException('You have no offers', HttpStatus.NOT_FOUND);
    }
    console.log('Get offer by id:', offers);

    const offersDto: OfferDto[] = await Promise.all(
      offers.map(async (offer) => {
        let publicId = offer.image;

        if (publicId) {
          publicId = await this.cloudinary.getPathToImg(publicId);
        }
        const { id, price, unit, isActive, description_EN, description_HE } =
          offer;
        return {
          id,
          price,
          unit,
          isActive,
          description_EN,
          description_HE,
          image: publicId,
        };
      }),
    );
    return offersDto;
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
    offerId: number,
  ) {
    const result = await this.cloudinary.uploadImage(
      file,
      'offers',
      offerId.toString(),
    );
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

    const offersDto: OfferDto[] = await Promise.all(
      rows.map(async (offer) => {
        let publicId = offer.image;

        if (publicId) {
          publicId = await this.cloudinary.getPathToImg(publicId);
        }
        const { id, price, unit, isActive, description_EN, description_HE } =
          offer;
        return {
          id,
          price,
          unit,
          isActive,
          description_EN,
          description_HE,
          image: publicId,
        };
      }),
    );

    return {
      offers: offersDto,
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
              'logoURL',
              'coverURL',
              'coordinateLat',
              'coordinateLong',
            ],
          },
          {
            model: Product,
            include: [Category],
          },
        ],
      });

      const offersDto: OfferDto[] = await Promise.all(
        offers.map(async (offer) => {
          let publicId = offer.image;

          if (publicId) {
            publicId = await this.cloudinary.getPathToImg(publicId);
          }
          const {
            id,
            price,
            unit,
            isActive,
            description_EN,
            description_HE,
            farmer,
            product,
          } = offer;

          if (farmer) {
            farmer.logoURL = await this.cloudinary.getPathToImg(farmer.logoURL);
          }

          return {
            id,
            price,
            unit,
            isActive,
            description_EN,
            description_HE,
            image: publicId,
            farmer,
            product,
          };
        }),
      );

      console.log('Get full offers:', offersDto);
      return offersDto;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
