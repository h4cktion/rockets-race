"use server";
import { redirect } from "next/navigation";
import { launchRockets } from "@/app/services/launchRace";

export async function startRace(rocketA: string, rocketB: string) {
  const race = await launchRockets(rocketA, rocketB);
  console.log("race", race);
  redirect(`/race/${race!.id}`);
}
