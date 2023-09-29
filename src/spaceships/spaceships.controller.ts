import { Controller, Get, Param, Query } from '@nestjs/common';
import { SpaceshipsService } from './spaceships.service';

@Controller('spaceships')
export class SpaceshipsController {
  constructor(private readonly spaceshipsService: SpaceshipsService) {}

  @Get()
  findAll(@Query() query) {
    const page: number = query.page ? query.page : 1;
    return this.spaceshipsService.findAll(page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spaceshipsService.findOne(+id);
  }
}
