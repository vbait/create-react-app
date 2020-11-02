import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GRAPHQL_URI } from '../app.constants';

const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
  headers: {},
});

export default client;
