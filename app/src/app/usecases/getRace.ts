import { RocketRepository } from "../interfaces/rocketRepository";
import { Race } from "../domain/race";

export class GetRace {
  constructor(private readonly rocketRepository: RocketRepository) {
    this.rocketRepository = rocketRepository;
  }

  async execute(raceId: string): Promise<Race> {
    console.log("22 raceId", raceId);
    return this.rocketRepository.getRace(raceId);
  }
}
