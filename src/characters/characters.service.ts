import { Injectable } from '@nestjs/common';
import { SwapiService } from '../swapi/swapi.service';
import { Character } from './entities/character.entity';
import { urlToId } from '../utils/url';

@Injectable()
export class CharactersService {
  constructor(private swapiService: SwapiService) {}

  async findAll(page: number): Promise<Character[]> {
    const { results } = await this.swapiService.getAllCharacters(page);
    return results.map((character) => ({
      id: urlToId(character.url),
      name: character.name,
      height: character.height,
      mass: character.mass,
      birth_year: character.birth_year,
      eye_color: character.eye_color,
      films: character.films.map((film) => urlToId(film)),
      gender: character.gender,
      hair_color: character.hair_color,
      homeworld: urlToId(character.homeworld),
      skin_color: character.skin_color,
      species: character.species.map((specie) => urlToId(specie)),
      starships: character.starships.map((starship) => urlToId(starship)),
      vehicles: character.vehicles.map((vehicle) => urlToId(vehicle)),
    }));
  }

  async findOne(id: number): Promise<Character> {
    const character = await this.swapiService.getCharacterById(id.toString());
    if (!character) throw new Error('Character not found');
    return {
      id: parseInt(character.url.split('/')[5]),
      name: character.name,
      height: character.height,
      mass: character.mass,
      birth_year: character.birth_year,
      eye_color: character.eye_color,
      films: character.films.map((film) => urlToId(film)),
      gender: character.gender,
      hair_color: character.hair_color,
      homeworld: urlToId(character.homeworld),
      skin_color: character.skin_color,
      species: character.species.map((specie) => urlToId(specie)),
      starships: character.starships.map((starship) => urlToId(starship)),
      vehicles: character.vehicles.map((vehicle) => urlToId(vehicle)),
    };
  }
}
