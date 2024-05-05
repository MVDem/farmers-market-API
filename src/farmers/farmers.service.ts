import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EditFarmerDto } from './dtos/editFarmer.dto';
import { Farmer } from './farmers.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFarmerDto } from './dtos/createFarmer.dto';

@Injectable()
export class FarmersService {
  constructor(@InjectModel(Farmer) private farmerRepository: typeof Farmer) {}

  async createFarmer(dto: CreateFarmerDto) {
    const farmer = await this.farmerRepository.create(dto);
    if (!farmer) {
      throw new HttpException(
        'The farmer was not created',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log('Create farmer:', farmer);
    return farmer;
  }

  async updateFarmer(dto: EditFarmerDto, id: string) {
    const isUpdated = await this.farmerRepository.update(dto, {
      where: { id },
    });
    if (isUpdated[0] === 0) {
      throw new HttpException(
        'Farmer with this id is not found',
        HttpStatus.NOT_FOUND,
      );
    } else {
      const farmer = await this.farmerRepository.findOne({ where: { id } });
      console.log('Update farmer:', farmer);
      return farmer;
    }
  }

  async getOne(id: number) {
    const farmer = await this.farmerRepository.findOne({ where: { id } });
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
}
