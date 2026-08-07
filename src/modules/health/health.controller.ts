import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  check() {
    return this.healthService.check();
  }

  @Get('ready')
  ready() {
    return this.healthService.ready();
  }

  @Get('live')
  live() {
    return this.healthService.live();
  }

  @Get('db')
  async checkDatabase() {
    return this.healthService.checkDatabase();
  }

  @Get('memory')
  checkMemory() {
    return this.healthService.checkMemory();
  }
}
