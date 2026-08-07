import { PickType } from '@nestjs/mapped-types';
import { userEntity } from '../entity/user.entity';

export class CreateUserDto extends PickType(userEntity, [
  'name',
  'lastName',
  'age',
  'sex',
  'email',
  'password',
]) {}
