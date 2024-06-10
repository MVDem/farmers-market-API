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
  imageURL?: string;
}

const defaultImgUrl =
  process.env.CLOUDINARY_DEFAULT_FARMERS_IMAGE || 'farmers/default.jpg';

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
      imageURL: defaultImgUrl,
    };

    const farmer = await this.farmerRepository.create(farmerData);
    if (!farmer) {
      throw new HttpException(
        'The farmer was not created',
        HttpStatus.BAD_REQUEST,
      );
    }

    let publicId = farmer.imageURL;

    if (publicId) {
      publicId = await this.cloudinary.getPathToImg(publicId);
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
      imageURL: publicId,
    };
    return farmerDto;
  }

  async updateFarmer(
    dto: EditFarmerDto,
    id: string,
    file: Express.Multer.File,
  ) {
    const farmer = await this.farmerRepository.findOne({ where: { id } });
    if (!farmer) {
      throw new HttpException(
        'Farmer with this id is not found',
        HttpStatus.NOT_FOUND,
      );
    }
    let imgUrl;

    const farmerData: IFarmer = { ...dto, userId: farmer.userId };
    if (file) {
      const { public_id, url } = await this.uploadImageToCloudinary(
        file,
        farmer.id.toString(),
      );
      farmerData.imageURL = public_id;
      imgUrl = url;
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
      imageURL: imgUrl,
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
    let publicId = farmer.imageURL;

    if (publicId) {
      publicId = await this.cloudinary.getPathToImg(publicId);
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
      imageURL: publicId,
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
        let publicId = farmer.imageURL;

        if (publicId) {
          publicId = await this.cloudinary.getPathToImg(publicId);
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
          imageURL: publicId,
        };

        return farmerDto;
      }),
    );
    return farmersDtos;
  }
}
