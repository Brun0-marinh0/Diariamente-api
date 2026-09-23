import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Req} from "@nestjs/common";
import { CreateEntryUseCase } from "./use-cases/create-entry/create-entry.use-case";
import { FindEntriesUseCase } from "./use-cases/find-entries/find-entries.use-case";
import { CreateEntryDto } from "./dto/create-entry.dto";
import express from "express";
import { FindEntryByIdUseCase } from "./use-cases/find-entry-by-id/find-entry-by-id.use-case";
import { UpdateEntryUseCase } from "./use-cases/update-entry/updarte-entry.use-case";
import { UpdateEntryDto } from "./dto/update-entry.dto";
import { DeleteEntryUseCase } from "./use-cases/delete-entry/delete-entry.use-case";

@Controller('entries')
export class EntriesController {
    constructor(
        private createEntryUseCase: CreateEntryUseCase,
        private findEntriesUseCase: FindEntriesUseCase,
        private findEntryByIdUseCase: FindEntryByIdUseCase,
        private updateEntryUseCase: UpdateEntryUseCase,
        private deleteEntryUseCase: DeleteEntryUseCase,
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

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateEntryDto: UpdateEntryDto, @Req() req: express.Request) {
        const userId = (req as any).user.id; // Assuming user ID is attached to the request object
        return this.updateEntryUseCase.execute(Number(id), userId, updateEntryDto);
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string, @Req() req: express.Request) {
        const userId = (req as any).user.id; // Assuming user ID is attached to the request object
        await this.deleteEntryUseCase.execute(Number(id), userId);
    }
}