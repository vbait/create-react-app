import { MockedResponse } from '@apollo/client/testing';
import { AllFilmsDocument } from './AllFilms';

export const request = {
  query: AllFilmsDocument,
  variables: {},
};

export const ALL_FILMS_MOCK: MockedResponse<Record<string, any>> = {
  request,
  result: {
    data: {
      allFilms: {
        films: [
          {
            id: '26d6520c-f1f0-40b9-9f2d-8d537671bf1b',
            title: 'Refined Metal Shirt',
            episodeID: 93747,
          },
          {
            id: 'cf95bc66-9fc8-4d24-b354-6623917f5b09',
            title: 'Sleek Fresh Ball',
            episodeID: 25432,
          },
        ],
      },
    },
  },
};

export const EMPTY_FILMS_MOCK: MockedResponse<Record<string, any>> = {
  request,
  result: {
    data: {
      allFilms: {
        films: [],
      },
    },
  },
};

export const ERROR_FILMS_MOCK: MockedResponse<Record<string, any>> = {
  request,
  error: new Error('ERROR!'),
};
