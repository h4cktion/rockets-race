import { Rocket } from "@/app/domain/rocket";
import { Race } from "@/app/domain/race";

export interface RocketRepository {
  getRockets(): Promise<Rocket[]>;
  startRace(rocket1: string, rocket2: string): Promise<Race>;
  getRace(raceId: string): Promise<Race>;
}
