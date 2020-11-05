import React from 'react';
import { render, waitFor, cleanup } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { App } from './App';
import { ALL_FILMS_MOCK, EMPTY_FILMS_MOCK, ERROR_FILMS_MOCK } from './graphql/query/AllFilms';

describe('<App> /> spec', () => {
  afterEach(cleanup);

  test('should render Loading...', async () => {
    const mocks: MockedResponse<Record<string, any>>[] = [ALL_FILMS_MOCK];
    const html = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    );

    expect(html.getByText('Loading...')).toBeInTheDocument();
  });

  test('should render all films', async () => {
    const mocks: MockedResponse<Record<string, any>>[] = [ALL_FILMS_MOCK];
    const html = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    );

    await waitFor(() => {
      const element = html.getByTestId('films-list');
      expect(element).toBeInTheDocument();
    });
  });

  test('should render no films', async () => {
    const mocks: MockedResponse<Record<string, any>>[] = [EMPTY_FILMS_MOCK];
    const html = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    );

    await waitFor(() => {
      expect(html.getByText('No Films')).toBeInTheDocument();
    });
  });

  test('should render error', async () => {
    const mocks: MockedResponse<Record<string, any>>[] = [ERROR_FILMS_MOCK];
    const html = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    );

    await waitFor(() => {
      expect(html.getByText('Error!!!')).toBeInTheDocument();
    });
  });
});
