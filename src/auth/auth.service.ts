import { Injectable } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dtos/auth';

@Injectable()
export class AuthService {
  async signup(data: SignUpDto) {
    console.log({ data });
    return 'signUpDto';
  }

  async signin(data: SignInDto) {
    console.log({ data });
    return 'signInDto';
  }
}
