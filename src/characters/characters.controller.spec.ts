import { Test, TestingModule } from '@nestjs/testing';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';
import { mockedCharacters } from '../../__mock__/characters/characters.mock';
import { mockSwapiService } from '../../__mock__/swapi/swapi.mock';
import { SwapiService } from '../swapi/swapi.service';
import { urlToId } from '../utils/url';

const mockedCharactersParsed = mockedCharacters.map((character) => ({
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
  species: character.species.map((film) => urlToId(film)),
  starships: character.starships.map((film) => urlToId(film)),
  vehicles: character.vehicles.map((film) => urlToId(film)),
}));

describe('CharactersController', () => {
  let controller: CharactersController;
  let service: CharactersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharactersController],
      providers: [
        { useValue: mockSwapiService, provide: SwapiService },
        CharactersService,
      ],
    }).compile();

    controller = module.get<CharactersController>(CharactersController);
    service = module.get<CharactersService>(CharactersService);
  });

  describe('findAll', () => {
    it('should return an array of characters', async () => {
      jest
        .spyOn(service, 'findAll')
        .mockImplementation(() => Promise.resolve(mockedCharactersParsed));

      expect(await controller.findAll({})).toBe(mockedCharactersParsed);
    });
  });

  describe('findOne', () => {
    it('should return a character with the given id', async () => {
      jest
        .spyOn(service, 'findOne')
        .mockImplementation(() => Promise.resolve(mockedCharactersParsed[1]));

      expect(await controller.findOne('1')).toBe(mockedCharactersParsed[1]);
    });
  });
});
