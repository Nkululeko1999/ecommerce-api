import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users: any;

  constructor() {
    this.users = [
      {
        id: '1',
        names: 'Fezile Nkabinde',
        email: 'fez@gmail.com',
      },
    ];
  }
}
