import { Controller, Get, Param, Query } from '@nestjs/common';
import { PlanetsService } from './planets.service';

@Controller('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}
  @Get()
  findAll(@Query() query) {
    const page = query.page || 1;
    return this.planetsService.findAll(page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planetsService.findOne(+id);
  }
}
