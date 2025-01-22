"use client";
import { Rocket } from "@/app/domain/rocket";
import RocketButton from "./RocketButton";
import RocketDescription from "./RocketDescription";
import StartButton from "./StartButton";
import { Race } from "@/app/domain/race";

type RocketListProps = {
  rockets: Rocket[];
  startRace: (
    rocketId1: string,
    rocketId2: string
  ) => Promise<Race | undefined>;
};

const RocketList = ({ rockets, startRace }: RocketListProps) => {
  return (
    <div className="w-full flex justify-center flex-col items-center gap-8">
      <h1 className=" font-bold uppercase text-futur-blue">
        Sélectionner deux fusées pour lancer la course
      </h1>
      <ul className="flex gap-4">
        {rockets.map((rocket) => (
          <RocketButton key={rocket.id} rocket={rocket} />
        ))}
      </ul>
      <RocketDescription />
      <StartButton startTheRace={startRace} />
    </div>
  );
};

export default RocketList;
