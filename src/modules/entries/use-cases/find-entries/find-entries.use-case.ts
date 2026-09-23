import { Inject, Injectable } from "@nestjs/common";
import type { IEntriesRepository } from "../../repository/IEntries.repository";

@Injectable()
export class FindEntriesUseCase {
    constructor(
        @Inject('IEntriesRepository')
        private entriesRepository: IEntriesRepository,
    ) {}
    
    async execute(userId: number){
        return this.entriesRepository.findAllByUser(userId);
    }
    
}