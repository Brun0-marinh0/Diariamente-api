import { Inject, Injectable } from "@nestjs/common";
import type { IEntriesRepository } from "../../repository/IEntries.repository";
import { FindEntryByIdUseCase } from "../find-entry-by-id/find-entry-by-id.use-case";


@Injectable()
export class DeleteEntryUseCase {
    constructor(
        @Inject('IEntriesRepository') private readonly entriesRepository: IEntriesRepository,
        private readonly findEntryByIdUseCase: FindEntryByIdUseCase,
    ) {}

    async execute(id: number, userId: number): Promise<void> {
        await this.findEntryByIdUseCase.execute(id, userId);
        await this.entriesRepository.delete(id);
    }
}