import { Body, Controller, Get, Param, Post, Req} from "@nestjs/common";
import { CreateEntryUseCase } from "./use-cases/create-entry/create-entry.use-case";
import { FindEntriesUseCase } from "./use-cases/find-entries/find-entries.use-case";
import { CreateEntryDto } from "./dto/create-entry.dto";
import express from "express";
import { FindEntryByIdUseCase } from "./use-cases/find-entry-by-id/find-entry-by-id.use-case";

@Controller('entries')
export class EntriesController {
    constructor(
        private createEntryUseCase: CreateEntryUseCase,
        private findEntriesUseCase: FindEntriesUseCase,
        private findEntryByIdUseCase: FindEntryByIdUseCase
    ) {}

    @Post()
    async create(@Body() createEntryDto: CreateEntryDto, @Req() req: express.Request) {
        const userId = (req as any).user.id; // Assuming user ID is attached to the request object
        return this.createEntryUseCase.execute(createEntryDto, userId);
    }

    @Get()
    async findAll(@Req() req: express.Request) {
        const userId = (req as any).user.id; // Assuming user ID is attached to the request object
        return this.findEntriesUseCase.execute(userId);
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @Req() req: express.Request) {
        const userId = (req as any).user.id; // Assuming user ID is attached to the request object
        return this.findEntryByIdUseCase.execute(Number(id), userId);
    }
}
