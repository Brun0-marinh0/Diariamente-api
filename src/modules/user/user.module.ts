import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from './use-cases/create-user/create-user.use-case';
import { UserPrismaRepository } from './repository/implementations/user.prisma.repository';

@Module({
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    UserPrismaRepository,
    {
      provide: 'IUsersRepository',
      useExisting: UserPrismaRepository,
    },
  ],
  imports: [],
  exports: [],
})
export class UserModule {}
