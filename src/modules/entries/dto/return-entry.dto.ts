import { PickType } from '@nestjs/swagger';
import { EntriesEntity } from '../entity/entries.entity';

export class ReturnEntryDto extends PickType(EntriesEntity, [
    'id',
    'title',
    'content',
    'entryDate',
    'emotionLevel',
    'feelings',
    'tags',
    'wordCount', 
    'createdAt',
    'updatedAt',
] as const) {}
