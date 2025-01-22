"use client";
import React, { createContext, useContext, useState } from "react";
import { Rocket } from "@/app/domain/rocket";

type RocketContextType = {
  selectedRockets: Rocket[];
  selectOrDeselectRocket: (rocket: Rocket) => void;
  clearSelection: () => void;
};

const RocketSelectionContext = createContext<RocketContextType | undefined>(
  undefined
);

type MyComponentProps = {
  children: React.ReactNode;
};

export const RocketProvider: React.FC<MyComponentProps> = ({
  children,
}: MyComponentProps) => {
  const [selectedRockets, setSelectedRockets] = useState<Rocket[]>([]);

  const selectOrDeselectRocket = (rocket: Rocket) => {
    setSelectedRockets((prev) => {
      if (prev.includes(rocket)) {
        return prev.filter((selected) => selected.id !== rocket.id);
      } else if (prev.length < 2) {
        return [...prev, rocket];
      }
      return prev;
    });
  };

  const clearSelection = () => {
    setSelectedRockets([]);
  };

  return (
    <RocketSelectionContext.Provider
      value={{ selectedRockets, selectOrDeselectRocket, clearSelection }}
    >
      {children}
    </RocketSelectionContext.Provider>
  );
};

export const useRocketSelection = (): RocketContextType => {
  const context = useContext(RocketSelectionContext);
  if (!context) {
    throw new Error("Error with useRocketSelection");
  }
  return context;
};
