import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let apolloClient: ApolloClient<unknown> | undefined;

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "http://localhost:4000/graphql",
      credentials: "same-origin",
    }),
    cache: new InMemoryCache(),
    ssrMode: true,
  });
};

export const initializeApollo = () => {
  if (!apolloClient) {
    apolloClient = createApolloClient();
  }

  return apolloClient;
};
