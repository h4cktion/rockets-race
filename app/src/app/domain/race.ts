import { RocketProgress } from "./RocketProgress";

export type Race = {
  id: string;
  rocket1: RocketProgress;
  rocket2: RocketProgress;
  winner: string | null;
};
