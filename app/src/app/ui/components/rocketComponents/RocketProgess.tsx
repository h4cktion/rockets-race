"use client";

import { subscribeToRocketProgress } from "@/app/infra/rocketWs.repository";
import React, { useEffect, useState } from "react";

type RocketProgressProps = {
  raceId: string;
  rocketId: string;
};

const RocketProgress = ({ raceId, rocketId }: RocketProgressProps) => {
  const [progress, setProgress] = useState(0);
  const [exploded, setExploded] = useState(false);

  useEffect(() => {
    let unsubscribe: () => void;

    const startSubscription = async () => {
      try {
        unsubscribe = await subscribeToRocketProgress(
          raceId,
          rocketId,
          (event) => {
            setProgress(event.progress);
            setExploded(event.exploded);
          },
          (err) => {
            console.error("Erreur dans la souscription:", err);
          }
        );
      } catch (err) {
        console.error(
          "Erreur lors de l'initialisation de la souscription:",
          err
        );
      }
    };

    startSubscription();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [raceId, rocketId]);

  return (
    <div className="rocket-progress">
      <h2>Progression de la Fusée</h2>
      <div
        className="progress-bar"
        style={{
          width: `${progress}%`,
          backgroundColor: exploded ? "red" : "green",
        }}
      >
        rocket
      </div>
      {exploded && <p>💥 La fusée a explosé !</p>}
      {progress >= 100 && !exploded && <p>✅ La fusée a terminé !</p>}
    </div>
  );
};

export default RocketProgress;
