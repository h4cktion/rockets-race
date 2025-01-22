import { Rocket } from "@/app/domain/rocket";
import { ApolloRocketRepository } from "@/app/infra/appoloRocket.repository";
import { initializeApollo } from "@/app/infra/graphql/apolloClient";
import { GetRockets } from "@/app/usecases/getRocket";

export const fetchRockets = async (): Promise<Rocket[]> => {
  const client = initializeApollo();
  const rocketRepository = new ApolloRocketRepository(client);
  const getRockets = new GetRockets(rocketRepository);

  return getRockets.execute();
};
