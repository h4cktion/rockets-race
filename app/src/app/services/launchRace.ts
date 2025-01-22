import { ApolloRocketRepository } from "@/app/infra/appoloRocket.repository";
import { initializeApollo } from "@/app/infra/graphql/apolloClient";
import { StartRace } from "@/app/usecases/startRace";
import { Race } from "@/app/domain/race";

export const launchRockets = async (
  rocketId1: string,
  rocketId2: string
): Promise<Race> => {
  const client = initializeApollo();
  const rocketRepository = new ApolloRocketRepository(client);
  const startRace = new StartRace(rocketRepository);

  return startRace.execute(rocketId1, rocketId2);
};
