
import { IEntries, IFeeling } from './IEntries';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  Min,
  Max,
  IsDate
  
} from 'class-validator';

export class EntriesEntity implements IEntries {
  id!: number;
  userId!: number;
  @Length(3, 90, {
    message: 'O campo Título deve ter entre 3 e 90 caracteres.',
  })
  @IsString({
    message: 'O campo Título deve ser uma string.',
  })
  @IsNotEmpty({
    message: 'O campo Título não pode ser vazio.',
  })
  title!: string;

  @IsNotEmpty({
    message: 'O campo Conteúdo não pode ser vazio.',
  })
  @IsString({
    message: 'O campo Conteúdo deve ser uma string.',
  })
  @Length(3, 10000, {
    message: 'O campo Conteúdo deve ter entre 3 e 10000 caracteres.',
  })
  content!: string;

  @IsDate({
    message: 'O campo Data de Criação deve ser uma data válida.',
  })
  entryDate!: Date;
  createdAt!: Date;
  updatedAt!: Date;
  @IsInt({ message: 'O nível de emoção deve ser um número inteiro.' })
  @Min(1, { message: 'O nível de emoção mínimo é 1.' })
  @Max(5, { message: 'O nível de emoção máximo é 5.' })
  emotionLevel!: number;
  
  feelings!: IFeeling;
  tags!: string[];
  wordCount!: number;
}
