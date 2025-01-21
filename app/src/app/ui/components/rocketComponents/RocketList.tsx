"use client";
import { Rocket } from "@/app/domain/rocket";
import React, { useState } from "react";
import RocketButton from "./RocketButton";
import RocketDescription from "./RocketDescription";
import StartButton from "./StartButton";

const RocketList = ({ rockets }: { rockets: Rocket[] }) => {
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
      <StartButton rockets={selectedRockets} />
    </div>
  );
};

export default RocketList;
