"use server";
import { redirect } from "next/navigation";
import { launchRockets } from "@/app/services/launchRace";
import { fetchRace } from "../services/getRace";

export async function startRace(rocketA: string, rocketB: string) {
  const race = await launchRockets(rocketA, rocketB);
  redirect(`/race/${race!.id}`);
}

export async function getRace(raceId: string) {
  console.log("raceId", raceId);
  const race = await fetchRace(raceId);
  return race;
}
