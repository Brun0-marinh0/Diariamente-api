import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService, type JwtSignOptions } from '@nestjs/jwt';
import type { IUsersRepository } from 'src/modules/user/repository/IUsers.repository';
import { SignInDto } from '../dto/sign-in.dto';
import { JWTTokenUserData } from '../dto/jwt-token-user-data.tdo';
import { jwtConstants } from '../config/constants';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignInUserCase {
  constructor(
    @Inject('IUsersRepository')
    private usersRepository: IUsersRepository,
    private jwtService: JwtService,
  ) {}

  async execute(signInDto: SignInDto): Promise<JWTTokenUserData> {
    const user = await this.usersRepository.findByEmail(signInDto.email);

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    const isPasswordValid = await bcrypt.compare(
      signInDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    const access_token = await this.jwtService.signAsync(
      { id: user.id, email: user.email },
      {
        secret: jwtConstants.secret,
        expiresIn: jwtConstants.expiresIn as JwtSignOptions['expiresIn'],
      },
    );

    return {
      access_token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
}
