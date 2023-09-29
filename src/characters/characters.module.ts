import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { SwapiService } from '../swapi/swapi.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CharactersController],
  providers: [SwapiService, CharactersService],
})
export class CharactersModule {}
