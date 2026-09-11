import { Body, Controller, Post, Req} from "@nestjs/common";
import { CreateEntryUseCase } from "./use-cases/create-entry/create-entry.use-case";
import { CreateEntryDto } from "./dto/create-entry.dto";
import express from "express";

@Controller('entries')
export class EntriesController {
    constructor(private createEntryUseCase: CreateEntryUseCase) {}

    @Post()
    async create(@Body() createEntryDto: CreateEntryDto, @Req() req: express.Request) {
        const userId = (req as any).user.id; // Assuming user ID is attached to the request object
        return this.createEntryUseCase.execute(createEntryDto, userId);
    }
}