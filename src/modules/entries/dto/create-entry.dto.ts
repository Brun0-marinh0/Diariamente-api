import { EntriesEntity } from "../entity/entries.entity";
import { PickType } from '@nestjs/mapped-types';   

export class CreateEntryDto extends PickType(EntriesEntity, [
    'title',
    'content',
    'entryDate',
    'emotionLevel',
    'feelings',
    'tags',
] as const) {}