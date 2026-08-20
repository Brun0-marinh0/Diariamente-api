import { CreateUserDto } from '../dto/create-user.dto';
import { ReturnUserDto } from '../dto/return-user.dto';
import { userEntity } from '../entity/user.entity';

export interface IUsersRepository {
  create(
    createUserDto: CreateUserDto,
    hashedPassword: string,
  ): Promise<ReturnUserDto>;
  findByEmail(email: string): Promise<userEntity | null>;
}
