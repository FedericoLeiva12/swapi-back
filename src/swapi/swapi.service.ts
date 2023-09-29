import { catchError, firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CharacterFromSwapi } from '../characters/entities/character.entity';
import { Response } from './entities/swapi.entity';
import { FilmFromSwapi } from '../films/entities/film.entity';
import { SpaceshipFromSwapi } from 'src/spaceships/entities/spaceship.entity';
import { PlanetFromSwapi } from 'src/planets/entities/planet.entity';

@Injectable()
export class SwapiService {
  constructor(private httpService: HttpService) {}

  async getCharacterById(id: string): Promise<CharacterFromSwapi> {
    const { data } = await firstValueFrom(
      this.httpService.get(`https://swapi.dev/api/people/${id}`).pipe(
        catchError((err) => {
          if (err.response.status === 404) {
            throw new NotFoundException();
          }
          throw 'An error happened!';
        }),
      ),
    );

    return data as CharacterFromSwapi;
  }

  async getAllCharacters(
    page?: number,
  ): Promise<Response<CharacterFromSwapi[]>> {
    const { data } = await firstValueFrom(
      this.httpService
        .get(`https://swapi.dev/api/people/?page=${page ? page : 1}`)
        .pipe(
          catchError((err) => {
            if (err.response.status === 404) {
              throw new NotFoundException();
            }
            throw 'An error happened!';
          }),
        ),
    );

    return data as Response<CharacterFromSwapi[]>;
  }

  async getFilmById(id: string): Promise<FilmFromSwapi> {
    const { data } = await firstValueFrom(
      this.httpService.get(`https://swapi.dev/api/films/${id}`).pipe(
        catchError((err) => {
          if (err.response.status === 404) {
            throw new NotFoundException();
          }
          throw 'An error happened!';
        }),
      ),
    );

    return data;
  }

  async getAllFilms(page: number): Promise<Response<FilmFromSwapi[]>> {
    const { data } = await firstValueFrom(
      this.httpService.get(`https://swapi.dev/api/films/?page=${page}`).pipe(
        catchError((err) => {
          if (err.response.status === 404) {
            throw new NotFoundException();
          }
          throw 'There was an error with your request';
        }),
      ),
    );

    return data as Response<FilmFromSwapi[]>;
  }

  async getSpaceshipById(id: string): Promise<SpaceshipFromSwapi> {
    const { data } = await firstValueFrom(
      this.httpService.get(`https://swapi.dev/api/starships/${id}`).pipe(
        catchError((err) => {
          if (err.response.status === 404) {
            throw new NotFoundException();
          }
          throw 'An error happened!';
        }),
      ),
    );

    return data;
  }

  async getAllSpaceships(
    page: number,
  ): Promise<Response<SpaceshipFromSwapi[]>> {
    const { data } = await firstValueFrom(
      this.httpService
        .get(`https://swapi.dev/api/starships/?page=${page}`)
        .pipe(
          catchError((err) => {
            if (err.response.status === 404) {
              throw new NotFoundException();
            }
            throw 'There was an error with your request';
          }),
        ),
    );

    return data as Response<SpaceshipFromSwapi[]>;
  }

  async getPlanetById(id: string): Promise<PlanetFromSwapi> {
    const { data } = await firstValueFrom(
      this.httpService.get(`https://swapi.dev/api/planets/${id}`).pipe(
        catchError((err) => {
          if (err.response.status === 404) {
            throw new NotFoundException();
          }
          throw 'An error happened!';
        }),
      ),
    );

    return data;
  }

  async getAllPlanets(page: number): Promise<Response<PlanetFromSwapi[]>> {
    const { data } = await firstValueFrom(
      this.httpService.get(`https://swapi.dev/api/planets/?page=${page}`).pipe(
        catchError((err) => {
          if (err.response.status === 404) {
            throw new NotFoundException();
          }
          throw 'There was an error with your request';
        }),
      ),
    );

    return data as Response<PlanetFromSwapi[]>;
  }
}
