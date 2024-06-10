import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EditFarmerDto } from './dtos/editFarmer.dto';
import { Farmer } from './farmers.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFarmerDto } from './dtos/createFarmer.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { FarmerDto } from './dtos/farmer.dto';

interface IFarmer {
  userId: number;
  name?: string;
  description?: string;
  city?: string;
  address?: string;
  email: string;
  phone?: string;
  coordinateLat?: number;
  coordinateLong?: number;
  logoURL?: string;
  coverURL?: string;
}

const defaultLogo =
  process.env.CLOUDINARY_DEFAULT_FARMERS_LOGO_IMAGE ||
  'farmers/logos/default.jpg';
const defaultCover =
  process.env.CLOUDINARY_DEFAULT_FARMERS_COVER_IMAGE ||
  'farmers/covers/default.jpg';

@Injectable()
export class FarmersService {
  constructor(
    @InjectModel(Farmer) private farmerRepository: typeof Farmer,
    private cloudinary: CloudinaryService,
  ) {}

  async createFarmer(dto: CreateFarmerDto): Promise<FarmerDto> {
    console.log('Create farmer:', dto);

    const farmerData: IFarmer = {
      userId: dto.userId,
      email: dto.email,
      logoURL: defaultLogo,
      coverURL: defaultCover,
    };

    const farmer = await this.farmerRepository.create(farmerData);
    if (!farmer) {
      throw new HttpException(
        'The farmer was not created',
        HttpStatus.BAD_REQUEST,
      );
    }

    let publicIdLogo = farmer.logoURL;

    if (publicIdLogo) {
      publicIdLogo = await this.cloudinary.getPathToImg(publicIdLogo);
    }

    let publicIdCover = farmer.coverURL;

    if (publicIdCover) {
      publicIdCover = await this.cloudinary.getPathToImg(publicIdCover);
    }

    // console.log('Create farmer:', farmer);
    const farmerDto: FarmerDto = {
      id: farmer.id,
      name: farmer.name,
      description: farmer.description,
      city: farmer.city,
      address: farmer.address,
      email: farmer.email,
      phone: farmer.phone,
      coordinateLat: farmer.coordinateLat,
      coordinateLong: farmer.coordinateLong,
      userId: farmer.userId,
      logoURL: publicIdLogo,
      coverURL: publicIdCover,
    };
    return farmerDto;
  }

  async updateFarmer(
    dto: EditFarmerDto,
    id: string,
    logo?: Express.Multer.File,
    cover?: Express.Multer.File,
  ) {
    const farmer = await this.farmerRepository.findOne({ where: { id } });
    if (!farmer) {
      throw new HttpException(
        'Farmer with this id is not found',
        HttpStatus.NOT_FOUND,
      );
    }

    const farmerData: IFarmer = { ...dto, userId: farmer.userId };

    let logoUrl;

    if (logo) {
      const { public_id, url } = await this.uploadImageToCloudinary(
        logo,
        farmer.id.toString(),
      );
      farmerData.logoURL = public_id;
      logoUrl = url;
    }

    let coverUrl;

    if (cover) {
      const { public_id, url } = await this.uploadImageToCloudinary(
        cover,
        farmer.id.toString(),
      );
      farmerData.coverURL = public_id;
      coverUrl = url;
    }

    const isUpdated = await this.farmerRepository.update(farmerData, {
      where: { id },
    });
    if (isUpdated[0] === 0) {
      throw new HttpException('Farmer not updated', HttpStatus.NOT_FOUND);
    }
    const updatedFarmer = await this.farmerRepository.findOne({
      where: { id },
    });
    // console.log('Update farmer:', updatedFarmer);
    const farmerDto: FarmerDto = {
      id: updatedFarmer.id,
      name: updatedFarmer.name,
      description: updatedFarmer.description,
      city: updatedFarmer.city,
      address: updatedFarmer.address,
      email: updatedFarmer.email,
      phone: updatedFarmer.phone,
      coordinateLat: updatedFarmer.coordinateLat,
      coordinateLong: updatedFarmer.coordinateLong,
      userId: updatedFarmer.userId,
      logoURL: logoUrl,
      coverURL: coverUrl,
    };
    return farmerDto;
  }

  async getOne(id: number) {
    const farmer = await this.farmerRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!farmer) {
      throw new HttpException(
        'Farmer with this id is not found',
        HttpStatus.NOT_FOUND,
      );
    }
    console.log('Get farmer by id:', farmer);
    let logoUrl = farmer.logoURL;

    if (logoUrl) {
      logoUrl = await this.cloudinary.getPathToImg(logoUrl);
    }

    let coverUrl = farmer.coverURL;

    if (coverUrl) {
      coverUrl = await this.cloudinary.getPathToImg(coverUrl);
    }

    const farmerDto: FarmerDto = {
      id: farmer.id,
      name: farmer.name,
      description: farmer.description,
      city: farmer.city,
      address: farmer.address,
      email: farmer.email,
      phone: farmer.phone,
      coordinateLat: farmer.coordinateLat,
      coordinateLong: farmer.coordinateLong,
      userId: farmer.userId,
      logoURL: logoUrl,
      coverURL: coverUrl,
    };
    return farmerDto;
  }

  async deleteFarmer(id: string) {
    const farmer = await this.farmerRepository.destroy({ where: { id } });
    if (!farmer) {
      throw new HttpException(
        'Farmer with this id is not found',
        HttpStatus.NOT_FOUND,
      );
    }
    console.log('Delete farmer by id:', farmer);
    return farmer;
  }

  private async uploadImageToCloudinary(
    file: Express.Multer.File,
    farmerId: string,
  ) {
    const result = await this.cloudinary.uploadImage(file, 'farmers', farmerId);
    console.log('Upload image:', result, file);
    if (!result) {
      throw new HttpException('Image was not uploaded', HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  async getAll() {
    const farmers = await this.farmerRepository.findAll();
    if (!farmers || farmers.length === 0) {
      throw new HttpException('No farmers found', HttpStatus.NOT_FOUND);
    }
    console.log('Get all farmers', farmers);

    const farmersDtos: FarmerDto[] = await Promise.all(
      farmers.map(async (farmer) => {
        let logoUrl = farmer.logoURL;

        if (logoUrl) {
          logoUrl = await this.cloudinary.getPathToImg(logoUrl);
        }

        let coverUrl = farmer.coverURL;

        if (coverUrl) {
          coverUrl = await this.cloudinary.getPathToImg(coverUrl);
        }

        const farmerDto: FarmerDto = {
          id: farmer.id,
          name: farmer.name,
          description: farmer.description,
          city: farmer.city,
          address: farmer.address,
          email: farmer.email,
          phone: farmer.phone,
          coordinateLat: farmer.coordinateLat,
          coordinateLong: farmer.coordinateLong,
          userId: farmer.userId,
          logoURL: logoUrl,
          coverURL: coverUrl,
        };

        return farmerDto;
      }),
    );
    return farmersDtos;
  }
}
