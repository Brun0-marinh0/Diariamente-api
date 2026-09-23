import { Module } from "@nestjs/common";
import { EntriesController } from "./entries.controller";
import { EntriesPrismaRepository } from "./repository/implementations/entries.prisma.repository";
import { CreateEntryUseCase } from "./use-cases/create-entry/create-entry.use-case";
import { FindEntriesUseCase } from "./use-cases/find-entries/find-entries.use-case";
import { FindEntryByIdUseCase } from "./use-cases/find-entry-by-id/find-entry-by-id.use-case";
import { UpdateEntryUseCase } from "./use-cases/update-entry/updarte-entry.use-case";
import { DeleteEntryUseCase } from "./use-cases/delete-entry/delete-entry.use-case";

@Module({
    controllers: [EntriesController],
    providers: [
        CreateEntryUseCase,
        FindEntriesUseCase,
        FindEntryByIdUseCase,
        UpdateEntryUseCase,
        DeleteEntryUseCase,
        EntriesPrismaRepository,
        {provide: 'IEntriesRepository', useExisting: EntriesPrismaRepository},
    ],
    exports: ['IEntriesRepository'],
})
export class EntriesModule {}