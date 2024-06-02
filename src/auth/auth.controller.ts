import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user-dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signin')
  async signin(@Body() userDto: CreateUserDto, @Res() res: Response) {
    const { token, userData } = await this.authService.signin(userDto);

    res.cookie('token', token, { httpOnly: true, secure: false });
    return res.json({
      message: 'success',
      userData,
    });
  }

  @Post('/signup')
  async signup(@Body() userDto: CreateUserDto, @Res() res: Response) {
    return res.json(await this.authService.signup(userDto));
  }
}
