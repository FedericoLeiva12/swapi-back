import { mockedCharacters } from '../characters/characters.mock';

export const mockSwapiService = {
  getAllCharacters: jest.fn(() => {
    return { results: mockedCharacters };
  }),
  getCharacterById: jest.fn((id) => {
    return mockedCharacters[id];
  }),
};
