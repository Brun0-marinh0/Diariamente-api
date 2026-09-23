import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import type { IEntriesRepository } from "../../repository/IEntries.repository";

@Injectable()
export class FindEntryByIdUseCase {
    constructor(
        @Inject('IEntriesRepository') private readonly entriesRepository: IEntriesRepository
    ) {}

    async execute(id: number, userId: number) {
        const entry = await this.entriesRepository.findById(id);

        if(!entry || entry.userId !== userId){
            throw new NotFoundException('Registro não encontrado');
        }
        return entry;
    }
}