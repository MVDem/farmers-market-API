import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Offer } from './offers.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOfferDto } from './dtos/createOffer.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { OfferDto } from './dtos/offer.dto';
import { PaginatedOfferDto } from './dtos/paginatedOffers.dto';
import { Farmer } from 'src/farmers/farmers.model';
import { Product } from 'src/products/products.model';
import { Category } from 'src/categories/categories.model';
import { Model, Op } from 'sequelize';
import { FarmerDto } from 'src/farmers/dtos/farmer.dto';
import { ProductDto } from 'src/products/dtos/product.dto';

export interface ISearchParams {
  columnName?: string;
  value?: string;
}

@Injectable()
export class OffersService {
  constructor(
    @InjectModel(Offer) private OffersRepository: typeof Offer,
    private cloudinary: CloudinaryService,
  ) {}
  async getPaginatedSortedOffers(
    limit: number,
    page: number,
    sortBy: string,
    order: string,
    columnName: string,
    value: string,
  ): Promise<PaginatedOfferDto> {
    const offset = (page - 1) * limit;
    

    let whereSearch = {}; 

    if (columnName) {
      const typeOfAttribute = Offer.getAttributes()[columnName].type.key;
      console.log('🚀 ~ OffersService ~ columnName:', columnName);
    console.log('🚀 ~ OffersService ~ typeOfColumn:', typeOfAttribute);
    whereSearch =
      columnName && value !== undefined && value !== ''
        ? typeOfAttribute === 'STRING'
          ? { [columnName]: { [Op.iLike]: `%${value}%` } }
          : typeOfAttribute === 'INTEGER'
            ? { [columnName]: { [Op.eq]: `${value}` } }
            : typeOfAttribute === 'BOOLEAN'
              ? { [columnName]: { [Op.is]: `${value}` } }
              : {}
        : {};
      }

    const response = await this.OffersRepository.findAndCountAll({
      where: whereSearch,
      include: [
        { model: Farmer, as: 'farmer' },
        {
          model: Product,
          as: 'product',
          include: [{ model: Category, as: 'category' }],
        },
      ],
      offset,
      limit: limit,
      order: [[sortBy, order]],
    });

    if (!response) {
      throw new HttpException('Nothing to display', HttpStatus.NOT_FOUND);
    }

    const { count, rows } = response;
    const offersDto: OfferDto[] = await Promise.all(
      rows.map(async (offer) => {
        let publicId = offer.imageURL
          ? await this.cloudinary.getPathToImg(offer.imageURL)
          : null;

        const farmerDto = new FarmerDto(offer.farmer.toJSON());

        const productDto = new ProductDto(offer.product.toJSON());
        return new OfferDto({
          ...offer.toJSON(),
          imageURL: publicId,
          farmer: farmerDto,
          product: productDto,
        });
      }),
    );

    return new PaginatedOfferDto({ offers: offersDto, count });
  }

  async create(
    farmerId: number,
    dto: CreateOfferDto,
    file?: Express.Multer.File,
  ) {
    const offerData = { ...dto, farmerId };
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
      offerData.imageURL = public_id;
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

    const offerDto = new OfferDto(updatedOffer);
    offerDto.imageURL = imageURL;

    return offerDto;
  }

  async update(
    id: number,
    farmerId: number,
    dto?: CreateOfferDto,
    file?: Express.Multer.File,
  ) {
    const offer = await this.OffersRepository.findOne({
      where: { id: id },
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

    if (dto) {
      Object.assign(offer, dto);
    }

    let imageURL = '';
    if (file) {
      const { public_id, url } = await this.uploadImageToCloudinary(
        file,
        offer.id,
      );
      offer.imageURL = public_id;
      imageURL = url;
    }

    const isUpdated = await this.OffersRepository.update(offer, {
      where: { id: id },
    });
    if (isUpdated[0] === 0) {
      throw new HttpException(
        'The offer was not updated',
        HttpStatus.NOT_FOUND,
      );
    }

    const updatedOffer = await this.OffersRepository.findOne({
      where: { id: id },
    });

    const offerDto = new OfferDto(updatedOffer);
    offerDto.imageURL = imageURL;

    return offerDto;
  }

  async delete(id: number, farmerId: number) {
    const offer = await this.OffersRepository.findOne({
      where: { id: id },
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
    const deletedOfferNumber = await this.OffersRepository.destroy({
      where: { id: id },
    });
    if (!deletedOfferNumber) {
      throw new HttpException(
        'Offer with this id is not found',
        HttpStatus.NOT_FOUND,
      );
    }
    console.log('Delete offer by id:', deletedOfferNumber);
    return deletedOfferNumber;
  }

  async getById(id: number) {
    const offer = await this.OffersRepository.findOne({
      where: { id: id },
      include: [
        { model: Farmer, as: 'farmer' },
        {
          model: Product,
          as: 'product',
          include: [{ model: Category, as: 'category' }],
        },
      ],
    });

    if (!offer) {
      throw new HttpException(
        'Offer with this id is not found',
        HttpStatus.NOT_FOUND,
      );
    }

    let publicId = offer.imageURL
      ? await this.cloudinary.getPathToImg(offer.imageURL)
      : null;

    const farmerDto = new FarmerDto(offer.farmer.toJSON());
    const productDto = new ProductDto(offer.product.toJSON());

    const offerDto = new OfferDto({
      ...offer.toJSON(),
      imageURL: publicId,
      farmer: farmerDto,
      product: productDto,
    });

    return offerDto;
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
}
