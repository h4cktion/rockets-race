import { createClient, Client } from "graphql-ws";

let graphqlWsClient: Client | null = null;

export const initializeGraphQLWsClient = () => {
  if (!graphqlWsClient) {
    graphqlWsClient = createClient({
      url: "ws://localhost:4000/graphql",
      retryAttempts: 5,
      connectionAckWaitTimeout: 5000,
    });
  }

  return graphqlWsClient;
};
