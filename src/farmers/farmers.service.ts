import { Injectable } from '@nestjs/common';
import { SignFarmerDto } from '../users/dto/sign.dto';
import { EditFarmerDto } from './dtos/editFarmer.dto';

@Injectable()
export class FarmersService {
  constructor() {}

  async signIn(dto: SignFarmerDto) {
    const farmer = {
      login: dto.login,
      password: dto.password,
    };
    console.log('Sign in as a farmer:', farmer);
    return farmer;
  }

  async signUp(dto: SignFarmerDto) {
    const farmer = {
      login: dto.login,
      password: dto.password,
    };
    console.log('Sign in as a farmer:', farmer);
    return farmer;
  }

  async updateFarmer(dto: EditFarmerDto) {
    Object.entries(dto).map(([key, value]) => {
      console.log(`Update farmer ${key}:`, value);
    });
    return dto;
  }

  async getOne(id: string) {
    console.log('Get farmer by id:', id);
    return id;
  }

  async deleteFarmer(id: string) {
    console.log('Delete farmer by id:', id);
    return id;
  }
}
