import { PickType } from '@nestjs/swagger';
import { userEntity } from '../entity/user.entity';

export class ReturnUserDto extends PickType(userEntity, ['name', 'email']) {}
