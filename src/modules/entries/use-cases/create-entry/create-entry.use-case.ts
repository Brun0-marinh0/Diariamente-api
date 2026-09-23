import { Inject, Injectable } from "@nestjs/common";
import type { IEntriesRepository } from "../../repository/IEntries.repository";
import { CreateEntryDto } from "../../dto/create-entry.dto";

@Injectable()
export class CreateEntryUseCase {
    constructor(
        @Inject('IEntriesRepository')
        private entriesRepository: IEntriesRepository,
    ){}

    async execute(createEntryDto: CreateEntryDto, userId: number){
        const wordCount = createEntryDto.content.trim().split(/\s+/).length;
        return this.entriesRepository.create({
            ...createEntryDto,
            userId,
            wordCount,
        });
    }
}