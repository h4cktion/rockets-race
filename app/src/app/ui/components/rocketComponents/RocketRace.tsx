"use client";

import React, { useEffect, useState } from "react";
import { subscribeToRocketProgress } from "@/app/infra/rocketWs.repository";
import RocketProgress from "./RocketProgess";

type RocketRaceProps = {
  raceId: string;
  rocketAId: string;
  rocketBId: string;
};

const RocketRace = ({ raceId, rocketAId, rocketBId }: RocketRaceProps) => {
  const [rocketAProgress, setRocketAProgress] = useState(0);
  const [rocketBProgress, setRocketBProgress] = useState(0);
  const [rocketAExploded, setRocketAExploded] = useState(false);
  const [rocketBExploded, setRocketBExploded] = useState(false);

  useEffect(() => {
    const unsubscribeAsync = async () => {
      const unsubscribeA = subscribeToRocketProgress(
        raceId,
        rocketAId,
        (event) => {
          setRocketAProgress(event.progress);
          setRocketAExploded(event.exploded);
        },
        (error) => console.error("Erreur fusée A:", error)
      );

      const unsubscribeB = subscribeToRocketProgress(
        raceId,
        rocketBId,
        (event) => {
          setRocketBProgress(event.progress);
          setRocketBExploded(event.exploded);
        },
        (error) => console.error("Erreur fusée B:", error)
      );

      await Promise.all([unsubscribeA(), unsubscribeB()]);
    };

    unsubscribeAsync();

    return () => {
      console.log("Démontage du composant, désabonnement...");
    };
  }, [raceId, rocketAId, rocketBId]);

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-3xl font-bold text-white mb-6">Rocket Race 🚀</h1>

      <div className="relative w-full max-w-4xl h-[500px] flex flex-row items-end justify-between p-4">
        <RocketProgress
          rocketProgress={rocketAProgress}
          rocketExploded={rocketAExploded}
        />
        <RocketProgress
          rocketProgress={rocketBProgress}
          rocketExploded={rocketBExploded}
        />
      </div>
    </div>
  );
};

export default RocketRace;
