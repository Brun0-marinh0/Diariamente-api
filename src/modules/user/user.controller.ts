import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserUseCase } from './use-cases/create-user/create-user.use-case';
import { CreateUserDto } from './dto/create-user.dto';
import { ReturnUserDto } from './dto/return-user.dto';

@ApiTags('Usuários')
@Controller('users')
export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  // @Public()
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<ReturnUserDto> {
    return await this.createUserUseCase.execute(createUserDto);
  }
}
