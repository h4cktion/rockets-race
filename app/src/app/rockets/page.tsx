import { fetchRockets } from "@/app/services/getRocket";
import RocketList from "@/app/ui/components/rocketComponents/RocketList";
import { RocketProvider } from "@/app/contexts/rocketContext";

const RocketsPage = async () => {
  const rockets = await fetchRockets();

  return (
    <RocketProvider>
      <div className="bg-futur-dark w-10/12 flex justify-center pt-4 m-auto h-screen">
        <RocketList rockets={rockets} />
      </div>
    </RocketProvider>
  );
};

export default RocketsPage;
