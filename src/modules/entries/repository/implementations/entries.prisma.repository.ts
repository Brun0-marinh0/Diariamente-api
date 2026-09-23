import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../../prisma/prisma.service";
import { IEntriesRepository } from "../IEntries.repository";
import { ReturnEntryDto } from "../../dto/return-entry.dto";

@Injectable()
export class EntriesPrismaRepository implements IEntriesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data): Promise<ReturnEntryDto> {
    const entry = await this.prismaService.entry.create({data});
    return entry as unknown as ReturnEntryDto;
  }

  async findAllByUser(userId: number): Promise<ReturnEntryDto[]> {
    const entries = await this.prismaService.entry.findMany({
      where: { userId },
    });
    return entries as unknown as ReturnEntryDto[];
  }

  async findById(id: number): Promise<ReturnEntryDto | null> {
    const entry = await this.prismaService.entry.findUnique({
      where: { id },
    });
    return entry as unknown as ReturnEntryDto | null;
  }

  async update(id: number, data): Promise<ReturnEntryDto> {
    const entry = await this.prismaService.entry.update({
      where: { id },
      data,
    });
    return entry as unknown as ReturnEntryDto;
  }

  async delete(id: number): Promise<void> {
    await this.prismaService.entry.delete({
      where: { id },
    });
  }
}