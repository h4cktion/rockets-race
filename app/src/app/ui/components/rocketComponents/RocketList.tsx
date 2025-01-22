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
      <h1 className=" font-bold uppercase text-futur-blue">
        Sélectionner deux fusées pour lancer la course
      </h1>
      <ul className="flex gap-4">
        {rockets.map((rocket) => (
          <RocketButton key={rocket.id} rocket={rocket} />
        ))}
      </ul>
      <RocketDescription />
      <StartButton />
    </div>
  );
};

export default RocketList;
