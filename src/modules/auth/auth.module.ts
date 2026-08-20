import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule, type JwtSignOptions } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { SignInUserCase } from './use-case/sign-in-user.user-case';
import { AuthGuard } from './guards/auth.guard';
import { jwtConstants } from './config/constants';

import { UserModule } from '../user/user.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: jwtConstants.expiresIn as JwtSignOptions['expiresIn'],
      },
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [SignInUserCase, { provide: APP_GUARD, useClass: AuthGuard }],
  exports: [],
})
export class AuthModule {}
