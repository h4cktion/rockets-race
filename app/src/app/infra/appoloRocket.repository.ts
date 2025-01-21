import { gql, ApolloClient } from "@apollo/client";
import { Rocket } from "@/app/domain/rocket";
import { RocketRepository } from "../interfaces/rocketRepository";

export class ApolloRocketRepository implements RocketRepository {
  private client: ApolloClient<unknown>;

  constructor(client: ApolloClient<unknown>) {
    this.client = client;
  }

  async getRockets(): Promise<Rocket[]> {
    const QUERY = gql`
      query GetRockets {
        rockets {
          id
          name
          description
          image
        }
      }
    `;
    const { data } = await this.client.query({ query: QUERY });
    return data.rockets;
  }
}
