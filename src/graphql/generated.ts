import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  shops?: Maybe<Array<Maybe<CoffeeShop>>>;
  slug: Scalars['String'];
  totalShops?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['String'];
};

export type CoffeeShop = {
  __typename?: 'CoffeeShop';
  categories?: Maybe<Array<Maybe<Category>>>;
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  isLiked: Scalars['Boolean'];
  isMine: Scalars['Boolean'];
  latitude: Scalars['String'];
  likes: Scalars['Int'];
  longitude: Scalars['String'];
  name: Scalars['String'];
  photos?: Maybe<Array<Maybe<CoffeeShopPhoto>>>;
  updatedAt: Scalars['String'];
  user: User;
};

export type CoffeeShopPhoto = {
  __typename?: 'CoffeeShopPhoto';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  shop: CoffeeShop;
  updatedAt: Scalars['String'];
  url: Scalars['String'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: MutationResponse;
  createCoffeeShop: CreateCoffeeShopResponse;
  editCoffeeShop: MutationResponse;
  editProfile: MutationResponse;
  login: LoginResult;
  toggleFollow: MutationResponse;
  toggleLike: MutationResponse;
};


export type MutationCreateAccountArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateCoffeeShopArgs = {
  categories: Array<InputMaybe<Scalars['String']>>;
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  name: Scalars['String'];
  photos: Array<InputMaybe<Scalars['Upload']>>;
};


export type MutationEditCoffeeShopArgs = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['Int'];
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
};


export type MutationEditProfileArgs = {
  avatarURL?: InputMaybe<Scalars['Upload']>;
  email?: InputMaybe<Scalars['String']>;
  githubUsername?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationToggleFollowArgs = {
  username: Scalars['String'];
};


export type MutationToggleLikeArgs = {
  id: Scalars['Int'];
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  searchUsers?: Maybe<Array<Maybe<User>>>;
  seeCategories?: Maybe<Array<Maybe<Category>>>;
  seeCategory?: Maybe<Array<Maybe<CoffeeShop>>>;
  seeCoffeeShop?: Maybe<CoffeeShop>;
  seeCoffeeShops?: Maybe<Array<Maybe<CoffeeShop>>>;
  seeProfile?: Maybe<User>;
};


export type QuerySearchUsersArgs = {
  keyword: Scalars['String'];
};


export type QuerySeeCategoriesArgs = {
  page: Scalars['Int'];
};


export type QuerySeeCategoryArgs = {
  category: Scalars['String'];
  page: Scalars['Int'];
};


export type QuerySeeCoffeeShopArgs = {
  id: Scalars['Int'];
};


export type QuerySeeCoffeeShopsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QuerySeeProfileArgs = {
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  avatarURL?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  followers?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  githubUsername?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isFollowing: Scalars['Boolean'];
  isMe: Scalars['Boolean'];
  location?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  totalFollowers: Scalars['Int'];
  totalFollowing: Scalars['Int'];
  username: Scalars['String'];
};

export type CreateCoffeeShopResponse = {
  __typename?: 'createCoffeeShopResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  photos?: Maybe<Array<Maybe<CoffeeShopPhoto>>>;
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResult', ok: boolean, token?: string | null, error?: string | null } };

export type CreateAccountMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: { __typename?: 'MutationResponse', ok: boolean, error?: string | null } };

export type CreateCoffeeShopMutationVariables = Exact<{
  name: Scalars['String'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  photos: Array<InputMaybe<Scalars['Upload']>> | InputMaybe<Scalars['Upload']>;
  categories: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
}>;


export type CreateCoffeeShopMutation = { __typename?: 'Mutation', createCoffeeShop: { __typename?: 'createCoffeeShopResponse', ok: boolean, error?: string | null } };

export type EditCoffeeShopMutationVariables = Exact<{
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['Upload']>> | InputMaybe<Scalars['Upload']>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type EditCoffeeShopMutation = { __typename?: 'Mutation', editCoffeeShop: { __typename?: 'MutationResponse', ok: boolean, error?: string | null } };

export type ToggleLikeMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ToggleLikeMutation = { __typename?: 'Mutation', toggleLike: { __typename?: 'MutationResponse', ok: boolean, error?: string | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', username: string, avatarURL?: string | null } | null };

export type SeeCoffeeShopsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
}>;


export type SeeCoffeeShopsQuery = { __typename?: 'Query', seeCoffeeShops?: Array<{ __typename?: 'CoffeeShop', id: number, name: string, latitude: string, longitude: string, createdAt: string, isMine: boolean, isLiked: boolean, likes: number, user: { __typename?: 'User', username: string, avatarURL?: string | null }, photos?: Array<{ __typename?: 'CoffeeShopPhoto', id: number, url: string } | null> | null, categories?: Array<{ __typename?: 'Category', id: number, name: string } | null> | null } | null> | null };


export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    ok
    token
    error
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateAccountDocument = gql`
    mutation createAccount($email: String!, $username: String!, $password: String!) {
  createAccount(email: $email, username: $username, password: $password) {
    ok
    error
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const CreateCoffeeShopDocument = gql`
    mutation createCoffeeShop($name: String!, $latitude: String!, $longitude: String!, $photos: [Upload]!, $categories: [String]!) {
  createCoffeeShop(
    name: $name
    latitude: $latitude
    longitude: $longitude
    photos: $photos
    categories: $categories
  ) {
    ok
    error
  }
}
    `;
export type CreateCoffeeShopMutationFn = Apollo.MutationFunction<CreateCoffeeShopMutation, CreateCoffeeShopMutationVariables>;

/**
 * __useCreateCoffeeShopMutation__
 *
 * To run a mutation, you first call `useCreateCoffeeShopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCoffeeShopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCoffeeShopMutation, { data, loading, error }] = useCreateCoffeeShopMutation({
 *   variables: {
 *      name: // value for 'name'
 *      latitude: // value for 'latitude'
 *      longitude: // value for 'longitude'
 *      photos: // value for 'photos'
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useCreateCoffeeShopMutation(baseOptions?: Apollo.MutationHookOptions<CreateCoffeeShopMutation, CreateCoffeeShopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCoffeeShopMutation, CreateCoffeeShopMutationVariables>(CreateCoffeeShopDocument, options);
      }
export type CreateCoffeeShopMutationHookResult = ReturnType<typeof useCreateCoffeeShopMutation>;
export type CreateCoffeeShopMutationResult = Apollo.MutationResult<CreateCoffeeShopMutation>;
export type CreateCoffeeShopMutationOptions = Apollo.BaseMutationOptions<CreateCoffeeShopMutation, CreateCoffeeShopMutationVariables>;
export const EditCoffeeShopDocument = gql`
    mutation editCoffeeShop($id: Int!, $name: String, $latitude: String, $longitude: String, $photos: [Upload], $categories: [String]) {
  editCoffeeShop(
    id: $id
    name: $name
    latitude: $latitude
    longitude: $longitude
    photos: $photos
    categories: $categories
  ) {
    ok
    error
  }
}
    `;
export type EditCoffeeShopMutationFn = Apollo.MutationFunction<EditCoffeeShopMutation, EditCoffeeShopMutationVariables>;

/**
 * __useEditCoffeeShopMutation__
 *
 * To run a mutation, you first call `useEditCoffeeShopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCoffeeShopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCoffeeShopMutation, { data, loading, error }] = useEditCoffeeShopMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      latitude: // value for 'latitude'
 *      longitude: // value for 'longitude'
 *      photos: // value for 'photos'
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useEditCoffeeShopMutation(baseOptions?: Apollo.MutationHookOptions<EditCoffeeShopMutation, EditCoffeeShopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditCoffeeShopMutation, EditCoffeeShopMutationVariables>(EditCoffeeShopDocument, options);
      }
export type EditCoffeeShopMutationHookResult = ReturnType<typeof useEditCoffeeShopMutation>;
export type EditCoffeeShopMutationResult = Apollo.MutationResult<EditCoffeeShopMutation>;
export type EditCoffeeShopMutationOptions = Apollo.BaseMutationOptions<EditCoffeeShopMutation, EditCoffeeShopMutationVariables>;
export const ToggleLikeDocument = gql`
    mutation toggleLike($id: Int!) {
  toggleLike(id: $id) {
    ok
    error
  }
}
    `;
export type ToggleLikeMutationFn = Apollo.MutationFunction<ToggleLikeMutation, ToggleLikeMutationVariables>;

/**
 * __useToggleLikeMutation__
 *
 * To run a mutation, you first call `useToggleLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleLikeMutation, { data, loading, error }] = useToggleLikeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleLikeMutation(baseOptions?: Apollo.MutationHookOptions<ToggleLikeMutation, ToggleLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleLikeMutation, ToggleLikeMutationVariables>(ToggleLikeDocument, options);
      }
export type ToggleLikeMutationHookResult = ReturnType<typeof useToggleLikeMutation>;
export type ToggleLikeMutationResult = Apollo.MutationResult<ToggleLikeMutation>;
export type ToggleLikeMutationOptions = Apollo.BaseMutationOptions<ToggleLikeMutation, ToggleLikeMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    username
    avatarURL
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const SeeCoffeeShopsDocument = gql`
    query seeCoffeeShops($page: Int) {
  seeCoffeeShops(page: $page) {
    id
    name
    latitude
    longitude
    createdAt
    isMine
    isLiked
    likes
    user {
      username
      avatarURL
    }
    photos {
      id
      url
    }
    categories {
      id
      name
    }
  }
}
    `;

/**
 * __useSeeCoffeeShopsQuery__
 *
 * To run a query within a React component, call `useSeeCoffeeShopsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeeCoffeeShopsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeeCoffeeShopsQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useSeeCoffeeShopsQuery(baseOptions?: Apollo.QueryHookOptions<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>(SeeCoffeeShopsDocument, options);
      }
export function useSeeCoffeeShopsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>(SeeCoffeeShopsDocument, options);
        }
export type SeeCoffeeShopsQueryHookResult = ReturnType<typeof useSeeCoffeeShopsQuery>;
export type SeeCoffeeShopsLazyQueryHookResult = ReturnType<typeof useSeeCoffeeShopsLazyQuery>;
export type SeeCoffeeShopsQueryResult = Apollo.QueryResult<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>;