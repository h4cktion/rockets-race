import { RocketRepository } from "@/app/adaptors/rocketRepository";
import { Rocket } from "@/app/domain/rocket";

export class GetRockets {
  constructor(private readonly rocketRepository: RocketRepository) {
    this.rocketRepository = rocketRepository;
  }

  async execute(): Promise<Rocket[]> {
    return this.rocketRepository.getRockets();
  }
}
