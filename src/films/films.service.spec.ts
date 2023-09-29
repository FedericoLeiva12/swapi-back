import { Test, TestingModule } from '@nestjs/testing';
import { FilmsService } from './films.service';
import { SwapiService } from '../swapi/swapi.service';
import { HttpModule } from '@nestjs/axios';

describe('FilmsService', () => {
  let service: FilmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [SwapiService, FilmsService],
    }).compile();

    service = module.get<FilmsService>(FilmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
