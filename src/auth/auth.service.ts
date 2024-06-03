import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { CreateFarmerDto } from 'src/farmers/dtos/createFarmer.dto';
import { FarmersService } from 'src/farmers/farmers.service';
import { InjectModel } from '@nestjs/sequelize';
import { Auth } from './auth.model';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth) private userRepository: typeof Auth,
    private jwtService: JwtService,
    private farmerService: FarmersService,
  ) {}

  async signin(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async signup(userDto: CreateUserDto) {
    const condidate = await this.userRepository.findOne({
      where: { email: userDto.email },
      include: { all: true },
    });
    if (condidate) {
      throw new HttpException('User allready exist', HttpStatus.BAD_REQUEST);
    }

    const hashPassword = await bcrypt.hash(userDto.password, 5);

    const user = await this.userRepository.create({
      ...userDto,
      password: hashPassword,
    });
    if (userDto.role === 'farmer') {
      const farmer: CreateFarmerDto = {
        email: userDto.email,
        userId: user.id,
      };
      await this.farmerService.createFarmer(farmer);
    }
    const createdUser = await this.userRepository.findOne({
      where: { id: user.id },
      include: { all: true },
    });
    return this.generateToken(createdUser);
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

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userRepository.findOne({
      where: { email: userDto.email },
      include: { all: true },
    });
    try {
      const passwordEquals = await bcrypt.compare(
        userDto.password,
        user?.password,
      );
      if (user || passwordEquals) {
        return user;
      }
    } catch {
      throw new UnauthorizedException({
        message: 'incorrect email or password',
      });
    }
  }
}
