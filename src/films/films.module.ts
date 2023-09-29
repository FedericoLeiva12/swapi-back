import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { SwapiService } from '../swapi/swapi.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [FilmsController],
  providers: [SwapiService, FilmsService],
})
export class FilmsModule {}
