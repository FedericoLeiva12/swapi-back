import { Injectable } from '@nestjs/common';
import { SwapiService } from 'src/swapi/swapi.service';
import { Spaceship } from './entities/spaceship.entity';
import { urlToId } from 'src/utils/url';

@Injectable()
export class SpaceshipsService {
  constructor(private swapiService: SwapiService) {}

  async findAll(page: number): Promise<Spaceship[]> {
    const spaceships = await this.swapiService.getAllSpaceships(page);
    return spaceships.results.map((spaceship) => ({
      id: urlToId(spaceship.url),
      name: spaceship.name,
      model: spaceship.model,
      manufacturer: spaceship.manufacturer,
      cost_in_credits: spaceship.cost_in_credits,
      length: spaceship.length,
      max_atmosphering_speed: spaceship.max_atmosphering_speed,
      crew: spaceship.crew,
      passengers: spaceship.passengers,
      cargo_capacity: spaceship.cargo_capacity,
      consumables: spaceship.consumables,
      hyperdrive_rating: spaceship.hyperdrive_rating,
      MGLT: spaceship.MGLT,
      starship_class: spaceship.starship_class,
      pilots: spaceship.pilots.map((pilot) => urlToId(pilot)),
      films: spaceship.films.map((film) => urlToId(film)),
    }));
  }

  async findOne(id: number): Promise<Spaceship> {
    const spaceship = await this.swapiService.getSpaceshipById(id.toString());
    return {
      id: urlToId(spaceship.url),
      name: spaceship.name,
      model: spaceship.model,
      manufacturer: spaceship.manufacturer,
      cost_in_credits: spaceship.cost_in_credits,
      length: spaceship.length,
      max_atmosphering_speed: spaceship.max_atmosphering_speed,
      crew: spaceship.crew,
      passengers: spaceship.passengers,
      cargo_capacity: spaceship.cargo_capacity,
      consumables: spaceship.consumables,
      hyperdrive_rating: spaceship.hyperdrive_rating,
      MGLT: spaceship.MGLT,
      starship_class: spaceship.starship_class,
      pilots: spaceship.pilots.map((pilot) => urlToId(pilot)),
      films: spaceship.films.map((film) => urlToId(film)),
    };
  }
}
