import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReturnUserDto } from '../../dto/return-user.dto';
import { CreateUserDto } from '../../dto/create-user.dto';
import { IUsersRepository } from '../IUsers.repository';

@Injectable()
export class UserPrismaRepository implements IUsersRepository {
  constructor(private prismaService: PrismaService) {}
  async create(
    createUserDto: CreateUserDto,
    hashedPassword: string,
  ): Promise<ReturnUserDto> {
    return await this.prismaService.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });
  }
}
