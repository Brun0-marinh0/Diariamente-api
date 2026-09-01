import { IEntries, IFeeling } from './IEntries';

export class EntriesEntity implements IEntries {
  id!: number;
  userId!: number;
  title!: string;
  content!: string;
  entryDate!: Date;
  createdAt!: Date;
  updatedAt!: Date;
  feeling!: string;
  feelings!: IFeeling;
  tags!: string[];
  wordCount!: number;
}
