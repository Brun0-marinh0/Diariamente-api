import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';

import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { EntriesModule } from './modules/entries/entries.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, EntriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
