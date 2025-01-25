import { RocketProgress } from "./rocketProgress";

export type Race = {
  id: string;
  rocket1: RocketProgress;
  rocket2: RocketProgress;
  winner: string | null;
};
