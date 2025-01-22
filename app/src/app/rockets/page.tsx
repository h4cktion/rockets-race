import { fetchRockets } from "@/app/services/getRocket";
import RocketList from "../ui/components/rocketComponents/RocketList";
import { launchRockets } from "../services/launchRace";

const RocketsPage = async () => {
  const rockets = await fetchRockets();

  const startRace = async (rocketA: string, rocketB: string) => {
    "use server";
    const race = await launchRockets(rocketA, rocketB);
    console.log("race", race);
  };

  return (
    <div className="bg-futur-dark w-10/12 flex justify-center pt-4 m-auto h-screen">
      <RocketList rockets={rockets} startRace={startRace} />
    </div>
  );
};

export default RocketsPage;
