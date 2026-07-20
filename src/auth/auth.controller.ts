import { Body, Controller, Post } from '@nestjs/common';
import type { SignUpDto, SignInDto } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: SignUpDto) {
    await this.authService.signup(body);
    return body;
  }

  @Post('signin')
  async signin(@Body() body: SignInDto) {
    await this.authService.signin(body);
    return body;
  }
}
