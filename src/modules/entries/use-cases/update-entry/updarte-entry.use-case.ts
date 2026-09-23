import { Inject, Injectable } from "@nestjs/common";
import type { IEntriesRepository } from "../../repository/IEntries.repository";
import { UpdateEntryDto } from "../../dto/update-entry.dto";
import { FindEntryByIdUseCase } from "../find-entry-by-id/find-entry-by-id.use-case";

@Injectable()
export class UpdateEntryUseCase {
    constructor(
        @Inject('IEntriesRepository') private readonly entriesRepository: IEntriesRepository,
        private readonly findEntryByIdUseCase: FindEntryByIdUseCase
    ) {}

    async execute(id: number, userId: number, updateEntryDto: UpdateEntryDto) {
        await this.findEntryByIdUseCase.execute(id, userId);

        const wordCount = updateEntryDto.content
            ? updateEntryDto.content.trim().split(/\s+/).length
            : undefined;

        return this.entriesRepository.update(id, { 
            ...updateEntryDto,
            ...(wordCount !== undefined ? { wordCount } : {}) 
        });
    }
}