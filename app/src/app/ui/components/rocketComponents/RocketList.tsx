"use client";
import { Rocket } from "@/app/domain/rocket";
import { useState } from "react";
import RocketButton from "./RocketButton";
import RocketDescription from "./RocketDescription";
import StartButton from "./StartButton";
// import { useRouter } from "next/navigation";

const RocketList = ({
  rockets,
  startRace,
}: {
  rockets: Rocket[];
  startRace: (rocketId1: string, rocketId2: string) => void;
}) => {
  // const router = useRouter();
  const [selectedRockets, setSelectedRockets] = useState<Rocket[]>([]);

  const selectOrDeselectRocket = (rocket: Rocket) => {
    if (selectedRockets.includes(rocket)) {
      setSelectedRockets(
        selectedRockets.filter((selected) => selected.id !== rocket.id)
      );
    }
    if (selectedRockets.length < 2 && !selectedRockets.includes(rocket)) {
      setSelectedRockets([...selectedRockets, rocket]);
    }
  };

  // const startTheRace = () => {

  //   const queryString = new URLSearchParams({
  //     rocketA: selectedRockets[0].id,
  //     rocketB: selectedRockets[1].id,
  //   }).toString();
  //   router.push(`/race?${queryString}`);
  // };

  return (
    <div className="w-full flex justify-center flex-col items-center gap-8">
      <h1 className=" font-bold uppercase text-futur-blue">
        Sélectionner deux fusées pour lancer la course
      </h1>
      <ul className="flex gap-4">
        {rockets.map((rocket) => (
          <RocketButton
            key={rocket.id}
            rocket={rocket}
            selectOrDeselectRocket={selectOrDeselectRocket}
            isSelected={selectedRockets.some((r) => r.id === rocket.id)}
          />
        ))}
      </ul>
      <RocketDescription rockets={selectedRockets} />
      <StartButton rockets={selectedRockets} startTheRace={startRace} />
    </div>
  );
};

export default RocketList;
