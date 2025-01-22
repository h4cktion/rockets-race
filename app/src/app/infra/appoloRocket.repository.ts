import { gql, ApolloClient } from "@apollo/client";
import { Rocket } from "@/app/domain/rocket";
import { RocketRepository } from "../interfaces/rocketRepository";
import { Race } from "../domain/race";

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

  async startRace(rocket1: string, rocket2: string): Promise<Race> {
    const MUTATION = gql`
      mutation startRace($rocket1: ID!, $rocket2: ID!) {
        startRace(rocket1: $rocket1, rocket2: $rocket2) {
          id
          rocket1 {
            id
            progress
            exploded
          }
          rocket2 {
            id
            progress
            exploded
          }
          winner
        }
      }
    `;

    const { data } = await this.client.mutate({
      mutation: MUTATION,
      variables: {
        rocket1,
        rocket2,
      },
    });

    return data.startRace;
  }
}
