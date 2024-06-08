import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user-dto';
import { SignInUserDto } from './dto/signin-user.dto';
import { Sign } from 'crypto';
import { SignedUserDto } from './dto/signed-user-dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}


  @ApiOperation({ summary: 'Sign in' })
  @ApiResponse({ status: 200, description: "Success", type: SignedUserDto })
  @ApiResponse({ status: 401, description: "Incorrect login (email) or password"})
  @ApiResponse({ status: 404, description: "User not found"})
  @Post('/signin')
  async signin(@Body() userDto: SignInUserDto, @Res() res: Response) {
    const { token, userData } = await this.authService.signin(userDto);

    res.cookie('token', token, { httpOnly: true, secure: false });

    return res.status(200).json(userData);
  }


  @ApiOperation({ summary: 'Sign up' })
  @ApiResponse({ status: 201, description: "Success", type: SignedUserDto })
  @ApiResponse({ status: 400, description: "User already exist"})
  @Post('/signup')
  async signup(@Body() userDto: CreateUserDto, @Res() res: Response) {
    return res.status(201).json(await this.authService.signup(userDto));
  }

  @ApiOperation({ summary: 'Logout' })
  @ApiResponse({ status: 200, description: 'User successfully logged out' })
  @Post('/logout')
  async logout(@Res() res: Response) {
    res.clearCookie('token');
    return res.status(200).json({ message: 'User successfully logged out' });
  }
}
