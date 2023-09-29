import { Module } from '@nestjs/common';
import { SpaceshipsService } from './spaceships.service';
import { SpaceshipsController } from './spaceships.controller';
import { SwapiService } from '../swapi/swapi.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [SpaceshipsController],
  providers: [SwapiService, SpaceshipsService],
})
export class SpaceshipsModule {}
