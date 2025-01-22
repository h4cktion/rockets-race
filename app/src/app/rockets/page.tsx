import { fetchRockets } from "@/app/services/getRocket";
import RocketList from "@/app/ui/components/rocketComponents/RocketList";
import { launchRockets } from "@/app/services/launchRace";
import { RocketProvider } from "@/app/contexts/rocketContext";
// import { useRouter } from "next/navigation";

const RocketsPage = async () => {
  // const router = useRouter();
  const rockets = await fetchRockets();

  const startRace = async (rocketA: string, rocketB: string) => {
    "use server";
    try {
      const race = await launchRockets(rocketA, rocketB);
      console.log("race", race);
      return race;
    } catch (err) {
      console.error("[startRace in page.tsx] : ", err);
      // TODO: Gérer cette erreur
    }
    // router.push(`/race?id=${race.id}`);
  };

  return (
    <RocketProvider>
      <div className="bg-futur-dark w-10/12 flex justify-center pt-4 m-auto h-screen">
        <RocketList rockets={rockets} startRace={startRace} />
      </div>
    </RocketProvider>
  );
};

export default RocketsPage;
