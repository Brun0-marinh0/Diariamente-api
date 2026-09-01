export interface IEntries {
  id: number;
  userId: number;
  title: string;
  content: string;
  entryDate: Date;
  createdAt: Date;
  updatedAt: Date;
  feeling: string;
  feelings: IFeeling;
  tags: string[];
  wordCount: number;
}

export interface IFeeling {
  positive: string[];
  negative: string[];
}
