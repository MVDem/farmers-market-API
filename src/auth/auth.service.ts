import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { CreateFarmerDto } from 'src/farmers/dtos/createFarmer.dto';
import { FarmersService } from 'src/farmers/farmers.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { InjectModel } from '@nestjs/sequelize';
import { Auth } from './auth.model';
import { CreateUserDto } from './dto/create-user-dto';
import { SignedUserDto } from './dto/signed-user-dto';
import { SignInUserDto } from './dto/signin-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth) private userRepository: typeof Auth,
    private jwtService: JwtService,
    private farmerService: FarmersService,
    private cloudinaryService: CloudinaryService,
  ) {}

  async signin(userDto: SignInUserDto) {
    const user = await this.validateUser(userDto);
    const token = await this.generateToken(user);
    if (user.role === 'FARMER' && user.farmer) {
      let publicIdLogo = user.farmer.logoURL;
      let publicIdCover = user.farmer.coverURL;

      if (publicIdLogo) {
        publicIdLogo = await this.cloudinaryService.getPathToImg(publicIdLogo);
      }

      if (publicIdCover) {
        publicIdCover = await this.cloudinaryService.getPathToImg(publicIdCover);
      }

      const userData: SignedUserDto = {
        id: user.id,
        email: user.email,
        role: user.role,
        farmer: {
          id: user.farmer.id,
          name: user.farmer.name,
          description: user.farmer.description,
          city: user.farmer.city,
          address: user.farmer.address,
          email: user.farmer.email,
          phone: user.farmer.phone,
          coordinateLat: user.farmer.coordinateLat,
          coordinateLong: user.farmer.coordinateLong,
          userId: user.farmer.userId,
          logoURL: publicIdLogo,
          coverURL: publicIdCover,
        },
      };
      return { token, userData };
    }
    return { token };
  }

  async signup(userDto: CreateUserDto) {
    const candidate = await this.userRepository.findOne({
      where: { email: userDto.email },
      include: { all: true },
    });
    if (candidate) {
      throw new BadRequestException('User already exist');
    }

    const hashPassword = await bcrypt.hash(userDto.password, 5);

    const user = await this.userRepository.create({
      ...userDto,
      password: hashPassword,
    });
    if (userDto.role === 'FARMER') {
      const farmer: CreateFarmerDto = {
        email: userDto.email,
        userId: user.id,
      };
      const userfarmer = await this.farmerService.createFarmer(farmer);
      if (!userfarmer) {
        throw new BadRequestException('User is not created');
      }
    }
    return { message: 'success' };
  }

  private async generateToken(user: Auth) {
    const payload = {
      email: user.email,
      id: user.id,
      role: user.role,
      farmer: user.farmer,
    };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userDto: SignInUserDto) {
    const user = await this.userRepository.findOne({
      where: { email: userDto.email },
      include: { all: true },
    });
    if (!user) {
      throw new NotFoundException({
        message: `User with login: ${userDto.email} not found`,
      });
    }

    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );

    if (passwordEquals) {
      return user;
    } else {
      throw new BadRequestException({
        message: 'Incorrect login (email) or password',
      });
    }
  }
}
