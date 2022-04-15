import { ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';

const TOKEN = 'token';

const authLink = setContext((_, { headers }) => ({
  headers: { ...headers, token: localStorage.getItem(TOKEN) },
}));

const uploadLink = createUploadLink({
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://nomadcoffee-backend-deploy.herokuapp.com/graphql'
      : 'http://localhost:4000/graphql',
});

export const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache(),
});
