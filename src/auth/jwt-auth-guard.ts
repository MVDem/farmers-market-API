import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { Auth } from './auth.model';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const token = req.cookies['token'];

      if (!token) {
        throw new UnauthorizedException({
          message: 'User is not authorization',
        });
      }

      const user: Auth = this.jwtService.verify(token);
      req.user = user;
      return true;
    } catch (e) {
      throw new UnauthorizedException({
        message: 'Token is not valid or User is not authorization ',
      });
    }
  }
}
