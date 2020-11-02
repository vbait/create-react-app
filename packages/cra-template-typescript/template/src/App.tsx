import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import { useAllFilmsQuery } from './graphql/query/__generated__/allFilms';
import { Film } from './graphql/types';
import logo from './logo.svg';
import './App.css';

function App() {
  const { loading, data, error } = useAllFilmsQuery({
    variables: {},
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!!!</div>;
  }

  const films: Film[] = (data?.allFilms?.films || []) as Film[];

  return (
    <div className="App">
      <header className="App-header" data-testid="app-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {films.map((film: Film) => (
            <li key={film.id} style={{ textAlign: 'left' }}>
              {film.title} ({film.episodeID})
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
