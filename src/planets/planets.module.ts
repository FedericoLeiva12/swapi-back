import { Module } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { PlanetsController } from './planets.controller';
import { SwapiService } from 'src/swapi/swapi.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PlanetsController],
  providers: [SwapiService, PlanetsService],
})
export class PlanetsModule {}
