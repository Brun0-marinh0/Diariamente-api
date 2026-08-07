import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { HealthModule } from './modules/health/health.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [AuthModule, PrismaModule, HealthModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
