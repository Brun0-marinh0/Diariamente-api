import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HealthService {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  check() {
    return { status: 'OK' };
  }

  ready() {
    return { status: 'OK', timestamp: new Date().toISOString() };
  }

  live() {
    return { status: 'OK', uptime: process.uptime() };
  }

  async checkDatabase() {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return { status: 'OK', database: 'connected' };
    } catch {
      return { status: 'ERROR', database: 'disconnected' };
    }
  }

  checkMemory() {
    const memory = process.memoryUsage();
    const formatMB = (bytes: number) =>
      `${(bytes / 1024 / 1024).toFixed(1)} MB`;

    return {
      status: 'OK',
      memory: {
        heapUsed: formatMB(memory.heapUsed),
        heapTotal: formatMB(memory.heapTotal),
        rss: formatMB(memory.rss),
      },
    };
  }
}
