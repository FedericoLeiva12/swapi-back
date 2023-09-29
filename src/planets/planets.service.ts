import { Injectable } from '@nestjs/common';
import { SwapiService } from 'src/swapi/swapi.service';
import { urlToId } from 'src/utils/url';
import { Planet } from './entities/planet.entity';

@Injectable()
export class PlanetsService {
  constructor(private swapiService: SwapiService) {}

  async findAll(page: number): Promise<Planet[]> {
    const planets = await this.swapiService.getAllPlanets(page);
    return planets.results.map((planet) => ({
      id: urlToId(planet.url),
      name: planet.name,
      rotation_period: planet.rotation_period,
      orbital_period: planet.orbital_period,
      diameter: planet.diameter,
      climate: planet.climate,
      gravity: planet.gravity,
      terrain: planet.terrain,
      surface_water: planet.surface_water,
      population: planet.population,
      residents: planet.residents.map((resident) => urlToId(resident)),
      films: planet.films.map((film) => urlToId(film)),
    }));
  }

  async findOne(id: number): Promise<Planet> {
    const planet = await this.swapiService.getPlanetById(id.toString());
    return {
      id: urlToId(planet.url),
      name: planet.name,
      rotation_period: planet.rotation_period,
      orbital_period: planet.orbital_period,
      diameter: planet.diameter,
      climate: planet.climate,
      gravity: planet.gravity,
      terrain: planet.terrain,
      surface_water: planet.surface_water,
      population: planet.population,
      residents: planet.residents.map((resident) => urlToId(resident)),
      films: planet.films.map((film) => urlToId(film)),
    };
  }
}
