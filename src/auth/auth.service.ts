import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  logout(): string {
    return 'Logout successful';
  }
}
