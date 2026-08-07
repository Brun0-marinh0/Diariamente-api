import { IUserEntity } from './IUserEntity';
import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsStrongPassword,
  Length,
  Matches,
} from 'class-validator';

export class userEntity implements IUserEntity {
  @Matches(/^\s*[a-zA-ZÀ-ÖØ-öø-ÿ]+(?: [a-zA-ZÀ-ÖØ-öø-ÿ]+)*\s*$/, {
    message:
      'O campo Nome não pode conter caracteres especiais ou somente espaços.',
  })
  @IsNotEmpty({
    message: 'O campo Nome não pode ser vazio.',
  })
  @Length(3, 90, {
    message: 'O campo Nome deve ter entre 3 e 90 caracteres.',
  })
  @IsString({
    message: 'O campo Nome deve ser uma string.',
  })
  name!: string;

  @Matches(/^\s*[a-zA-ZÀ-ÖØ-öø-ÿ]+(?: [a-zA-ZÀ-ÖØ-öø-ÿ]+)*\s*$/, {
    message:
      'O campo Sobrenome não pode conter caracteres especiais ou somente espaços.',
  })
  @IsNotEmpty({
    message: 'O campo Sobrenome não pode ser vazio.',
  })
  @Length(3, 90, {
    message: 'O campo Sobrenome deve ter entre 3 e 90 caracteres.',
  })
  @IsString({
    message: 'O campo Sobrenome deve ser uma string.',
  })
  lastName!: string;

  @IsNotEmpty({
    message: 'O campo Idade não pode ser vazio.',
  })
  @IsNumber(
    { maxDecimalPlaces: 0 },
    {
      message:
        'O campo Idade deve ser um número e não pode conter casas decimais.',
    },
  )
  @IsPositive({
    message: 'O campo Idade deve ser um número positivo.',
  })
  age!: number;

  @IsNotEmpty({
    message: 'O campo Sexo não pode ser vazio.',
  })
  @IsString({
    message: 'O campo Sexo deve ser uma string.',
  })
  @IsIn(['MALE', 'FEMALE', 'OTHER', 'PREFER_NOT_TO_SAY'], {
    message:
      'O campo Sexo deve ser um dos seguintes valores: MALE, FEMALE, OTHER ou PREFER_NOT_TO_SAY.',
  })
  sex!: string;

  @IsNotEmpty({
    message: 'O campo Email não pode ser vazio.',
  })
  @IsEmail(
    {},
    {
      message: 'O campo Email deve ser um endereço de email válido.',
    },
  )
  email!: string;

  @IsNotEmpty({
    message: 'O campo Senha não pode ser vazio.',
  })
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message:
        'O campo Senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e símbolos.',
    },
  )
  password!: string;
}
