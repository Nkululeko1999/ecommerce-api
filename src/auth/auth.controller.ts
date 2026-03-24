import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  private readonly authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  @Get('/register')
  register(): string {
    return 'User successfully registered';
  }

  @Get('/register')
  login(): string {
    return 'Login successful';
  }

  @Get('/logout')
  logout(): string {
    return this.authService.logout();
  }
}
