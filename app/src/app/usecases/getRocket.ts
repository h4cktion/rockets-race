import { Rocket } from "@/app/domain/rocket";
import { RocketRepository } from "../interfaces/rocketRepository";

export class GetRockets {
  constructor(private readonly rocketRepository: RocketRepository) {
    this.rocketRepository = rocketRepository;
  }

  async execute(): Promise<Rocket[]> {
    return this.rocketRepository.getRockets();
  }
}
