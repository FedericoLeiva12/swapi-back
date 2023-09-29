import { Injectable } from '@nestjs/common';
import { SwapiService } from '../swapi/swapi.service';
import { urlToId } from '../utils/url';
import { Film } from './entities/film.entity';

@Injectable()
export class FilmsService {
  constructor(private swapiService: SwapiService) {}

  async findAll(page: number): Promise<Film[]> {
    const { results } = await this.swapiService.getAllFilms(page);
    return results.map((film) => ({
      id: urlToId(film.url),
      title: film.title,
      episode_id: film.episode_id,
      opening_crawl: film.opening_crawl,
      director: film.director,
      producer: film.producer,
      release_date: film.release_date,
      characters: film.characters.map((character) => urlToId(character)),
      planets: film.planets.map((planet) => urlToId(planet)),
      starships: film.starships.map((starship) => urlToId(starship)),
      vehicles: film.vehicles.map((vehicle) => urlToId(vehicle)),
      species: film.species.map((specie) => urlToId(specie)),
    }));
  }

  async findOne(id: number): Promise<Film> {
    const film = await this.swapiService.getFilmById(id.toString());
    return {
      id: urlToId(film.url),
      title: film.title,
      episode_id: film.episode_id,
      opening_crawl: film.opening_crawl,
      director: film.director,
      producer: film.producer,
      release_date: film.release_date,
      characters: film.characters.map((character) => urlToId(character)),
      planets: film.planets.map((planet) => urlToId(planet)),
      starships: film.starships.map((starship) => urlToId(starship)),
      vehicles: film.vehicles.map((vehicle) => urlToId(vehicle)),
      species: film.species.map((specie) => urlToId(specie)),
    };
  }
}
