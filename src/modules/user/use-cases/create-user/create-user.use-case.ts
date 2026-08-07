import { Inject, Injectable } from '@nestjs/common';

import { CreateUserDto } from '../../dto/create-user.dto';
import type { IUsersRepository } from '../../repository/IUsers.repository';
import * as bcrypt from 'bcrypt';
import { ReturnUserDto } from '../../dto/return-user.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('IUsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async execute(createUserDto: CreateUserDto): Promise<ReturnUserDto> {
    const hashedPassword = await bcrypt.hash(createUserDto?.password, 8);
    return await this.usersRepository.create(createUserDto, hashedPassword);
  }
}
