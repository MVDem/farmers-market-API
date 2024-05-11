import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EditFarmerDto } from './dtos/editFarmer.dto';
import { Farmer } from './farmers.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFarmerDto } from './dtos/createFarmer.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

interface IFarmer {
  email: string;
  imageURL?: string;
  name?: string;
  description?: string;
  city?: string;
  address?: string;
  phone?: string;
  coordinateLat?: number;
  coordinateLong?: number;
}

const defaultImgUrl =
  process.env.CLOUDINARY_DEFAULT_FARMERS_IMAGE || 'farmers/default.jpg';

@Injectable()
export class FarmersService {
  constructor(
    @InjectModel(Farmer) private farmerRepository: typeof Farmer,
    private cloudinary: CloudinaryService,
  ) {}

  async createFarmer(dto: CreateFarmerDto) {
    const farmerData: IFarmer = {
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
    console.log('Create farmer:', farmer);
    return farmer;
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
    const fermerData: IFarmer = { ...dto };
    if (file) {
      const { public_id } = await this.uploadImageToCloudinary(
        file,
        farmer.id.toString(),
      );
      fermerData.imageURL = public_id;
    }
    const isUpdated = await this.farmerRepository.update(fermerData, {
      where: { id },
    });
    if (isUpdated[0] === 0) {
      throw new HttpException('Farmer not updated', HttpStatus.NOT_FOUND);
    }
    const updatedfarmer = await this.farmerRepository.findOne({
      where: { id },
    });
    console.log('Update farmer:', farmer);
    return updatedfarmer;
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
    return farmer;
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
}
