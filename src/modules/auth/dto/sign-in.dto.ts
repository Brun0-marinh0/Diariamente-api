import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
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
  @IsString({
    message: 'O campo Senha deve ser uma string.',
  })
  password!: string;
}
