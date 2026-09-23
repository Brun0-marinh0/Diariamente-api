import { CreateEntryDto } from "../dto/create-entry.dto";
import { ReturnEntryDto } from "../dto/return-entry.dto";
export interface IEntriesRepository {
    create(
        data: CreateEntryDto & { userId: number; wordCount: number },
    ): Promise<ReturnEntryDto>;
    findAllByUser(userId: number): Promise<ReturnEntryDto[]>;
    findById(id: number): Promise<ReturnEntryDto | null>;
    update(id: number, data: Partial<CreateEntryDto> & { wordCount?: number }): Promise<ReturnEntryDto>;
    delete(id: number): Promise<void>;
}