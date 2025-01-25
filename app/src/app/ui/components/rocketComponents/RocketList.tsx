"use client";
import { Rocket } from "@/app/domain/rocket";
import RocketButton from "./RocketButton";
import RocketDescription from "./RocketDescription";
import StartButton from "./StartButton";

type RocketListProps = {
  rockets: Rocket[];
};

const RocketList = ({ rockets }: RocketListProps) => {
  return (
    <div className="w-full flex justify-center flex-col items-center gap-8">
      <h1 className="text-center text-md md:text-2xl font-bold uppercase text-white">
        Sélectionnez deux fusées pour lancer la course
      </h1>
      <div className="flex flex-col md:flex-row w-full justify-center gap-4">
        {rockets.map((rocket) => (
          <RocketButton key={rocket.id} rocket={rocket} />
        ))}
      </div>
      <RocketDescription />
      <StartButton />
    </div>
  );
};

export default RocketList;
