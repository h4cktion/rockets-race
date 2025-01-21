import { gql, ApolloClient } from "@apollo/client";
import { RocketRepository } from "@/app/adaptors/rocketRepository";
import { Rocket } from "@/app/domain/rocket";

export class ApolloRocketRepository implements RocketRepository {
  private client: ApolloClient<any>;

  constructor(client: ApolloClient<any>) {
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
