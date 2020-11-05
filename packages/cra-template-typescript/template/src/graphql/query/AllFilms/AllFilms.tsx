import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type AllFilmsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllFilmsQuery = (
  { __typename?: 'Root' }
  & { allFilms?: Types.Maybe<(
    { __typename?: 'FilmsConnection' }
    & { films?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Film' }
      & Pick<Types.Film, 'id' | 'title' | 'episodeID'>
    )>>> }
  )> }
);


export const AllFilmsDocument = gql`
    query AllFilms {
  allFilms {
    films {
      id
      title
      episodeID
    }
  }
}
    `;

/**
 * __useAllFilmsQuery__
 *
 * To run a query within a React component, call `useAllFilmsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllFilmsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllFilmsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllFilmsQuery(baseOptions?: Apollo.QueryHookOptions<AllFilmsQuery, AllFilmsQueryVariables>) {
        return Apollo.useQuery<AllFilmsQuery, AllFilmsQueryVariables>(AllFilmsDocument, baseOptions);
      }
export function useAllFilmsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllFilmsQuery, AllFilmsQueryVariables>) {
          return Apollo.useLazyQuery<AllFilmsQuery, AllFilmsQueryVariables>(AllFilmsDocument, baseOptions);
        }
export type AllFilmsQueryHookResult = ReturnType<typeof useAllFilmsQuery>;
export type AllFilmsLazyQueryHookResult = ReturnType<typeof useAllFilmsLazyQuery>;
export type AllFilmsQueryResult = Apollo.QueryResult<AllFilmsQuery, AllFilmsQueryVariables>;