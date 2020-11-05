import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import { useAllFilmsQuery } from './graphql/query/AllFilms';
import { Film } from './graphql/types';

function App() {
  const { loading, data, error } = useAllFilmsQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!!!</div>;
  }

  const films: Film[] = (data?.allFilms?.films || []) as Film[];

  return (
    <div className="App">
      {!films.length && <div>No Films</div>}
      {films.length && (
        <ul data-testid="films-list">
          {films.map((film: Film) => (
            <li key={film.id} style={{ textAlign: 'left' }}>
              {film.title} ({film.episodeID})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export { App };
