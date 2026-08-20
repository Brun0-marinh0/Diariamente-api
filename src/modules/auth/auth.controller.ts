import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PublicRoute } from './decorators/public-route.decorator';
import { SignInUserCase } from './use-case/sign-in-user.user-case';
import { SignInDto } from './dto/sign-in.dto';
import { JWTTokenUserData } from './dto/jwt-token-user-data.tdo';

@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
  constructor(private signInUserCase: SignInUserCase) {}

  @PublicRoute()
  @Post('sign-in')
  @ApiOperation({ summary: 'Realiza login do usuário' })
  async signIn(@Body() signInDto: SignInDto): Promise<JWTTokenUserData> {
    return await this.signInUserCase.execute(signInDto);
  }
}
