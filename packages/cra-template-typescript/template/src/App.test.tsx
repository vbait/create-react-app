import React from 'react';
import { render, waitFor, cleanup } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { App } from './App';
import { AllFilmsDocument } from './graphql/query/AllFilms';

describe('<App> /> spec', () => {
  afterEach(cleanup);

  test('should render all films', async () => {
    const mocks: MockedResponse<Record<string, any>>[] = [
      {
        request: {
          query: AllFilmsDocument,
          variables: {},
        },
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
      },
    ];
    const html = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    );

    expect(html.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      const element = html.getByTestId('app-header');
      expect(element).toBeInTheDocument();
    });
  });
});
