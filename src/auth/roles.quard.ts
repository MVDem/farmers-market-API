import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { Auth } from './auth.model';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './user-self.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);

      if (!requiredRoles) {
        return true;
      }

      const tokenObj = req.cookies['token'];
      const token = tokenObj ? tokenObj.token : null;

      if (!token) {
        throw new UnauthorizedException({
          message: 'User is not authorization',
        });
      }

      const user: Auth = this.jwtService.verify(token);
      // console.log('user==>', user);
      req.user = user;
      return user.role === requiredRoles[0];
    } catch (e) {
      throw new UnauthorizedException({
        message: 'Token is not valid or User is not authorization ',
      });
    }
  }
}
