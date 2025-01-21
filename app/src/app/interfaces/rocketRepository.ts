import { Rocket } from "@/app/domain/rocket";

export interface RocketRepository {
  getRockets(): Promise<Rocket[]>;
}
