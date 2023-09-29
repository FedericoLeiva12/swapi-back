import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './characters/characters.module';
import { SwapiService } from './swapi/swapi.service';
import { SwapiModule } from './swapi/swapi.module';
import { HttpModule } from '@nestjs/axios';
import { FilmsModule } from './films/films.module';
import { SpaceshipsModule } from './spaceships/spaceships.module';
import { PlanetsModule } from './planets/planets.module';

@Module({
  imports: [CharactersModule, SwapiModule, HttpModule, FilmsModule, SpaceshipsModule, PlanetsModule],
  controllers: [AppController],
  providers: [AppService, SwapiService],
})
export class AppModule {}
