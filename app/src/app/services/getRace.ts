import { ApolloRocketRepository } from "@/app/infra/appoloRocket.repository";
import { initializeApollo } from "@/app/infra/graphql/apolloClient";
import { Race } from "@/app/domain/race";
import { GetRace } from "../usecases/getRace";

export const fetchRace = async (raceId: string): Promise<Race> => {
  const client = initializeApollo();
  const rocketRepository = new ApolloRocketRepository(client);
  const getRace = new GetRace(rocketRepository);

  return getRace.execute(raceId);
};
