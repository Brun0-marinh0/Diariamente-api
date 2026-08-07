import { CreateUserDto } from '../dto/create-user.dto';
import { ReturnUserDto } from '../dto/return-user.dto';

export interface IUsersRepository {
  create(
    createUserDto: CreateUserDto,
    hashedPassword: string,
  ): Promise<ReturnUserDto>;
}
