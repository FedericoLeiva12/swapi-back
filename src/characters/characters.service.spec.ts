import { Test, TestingModule } from '@nestjs/testing';
import { CharactersService } from './characters.service';
import { SwapiService } from '../swapi/swapi.service';
import { mockSwapiService } from '../../__mock__/swapi/swapi.mock';

describe('CharactersService', () => {
  let service: CharactersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { useValue: mockSwapiService, provide: SwapiService },
        CharactersService,
      ],
    }).compile();

    service = module.get<CharactersService>(CharactersService);
  });

  describe('get', () => {
    it('should return a character by id', async () => {
      const character = await service.findOne(1);
      expect(character).toBeDefined();
      expect(character.name).toEqual('Anakin Skywalker');
    });

    it('should throw an error if character is not found', async () => {
      await expect(service.findOne(999)).rejects.toThrow();
    });
  });

  describe('getAll', () => {
    it('should return an array of characters', async () => {
      const characters = await service.findAll();
      expect(characters).toBeDefined();
      // expect(characters.length).toBeGreaterThan(0);
    });
  });
});
