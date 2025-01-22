import { ApolloRocketRepository } from "@/app/infra/appoloRocket.repository";

export class StartRace {
  private rocketRepository: ApolloRocketRepository;

  constructor(rocketRepository: ApolloRocketRepository) {
    this.rocketRepository = rocketRepository;
  }

  async execute(rocket1: string, rocket2: string) {
    return this.rocketRepository.startRace(rocket1, rocket2);
  }
}
