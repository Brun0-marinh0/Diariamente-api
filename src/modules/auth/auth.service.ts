import { Injectable, ConflictException } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dtos/auth';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  async signup(data: SignUpDto) {
    const userAlreadyExists = await this.prismaService.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userAlreadyExists) {
      throw new ConflictException('User already exists');
    }

    const user = await this.prismaService.user.create({ data });

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      age: user.age,
    };
  }

  async signin(data: SignInDto) {
    console.log({ data });
    return 'signInDto';
  }
}
