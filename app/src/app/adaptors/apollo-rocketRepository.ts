// src/adaptors/rocketRepository.ts
import { ApolloClient, gql } from "@apollo/client";
import { Rocket } from "@/app/domain/rocket";
import { initializeApollo } from "@/app/infra/graphql/apolloClient";

export class ApolloRocketRepository {
  private client: ApolloClient<unknown>;

  constructor() {
    this.client = initializeApollo();
  }

  async getAllRockets(): Promise<Rocket[]> {
    const GET_ROCKETS_QUERY = gql`
      query GetRockets {
        rockets {
          id
          name
          description
          image
        }
      }
    `;

    const { data } = await this.client.query({
      query: GET_ROCKETS_QUERY,
    });

    return data.rockets;
  }
}
