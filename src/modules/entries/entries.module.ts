import { Module } from "@nestjs/common";
import { EntriesController } from "./entries.controller";
import { EntriesPrismaRepository } from "./repository/implementations/entries.prisma.repository";
import { CreateEntryUseCase } from "./use-cases/create-entry/create-entry.use-case";

@Module({
    controllers: [EntriesController],
    providers: [CreateEntryUseCase, EntriesPrismaRepository,
        {provide: 'IEntriesRepository', useExisting: EntriesPrismaRepository},
    ],
    exports: ['IEntriesRepository'],
})
export class EntriesModule {}