import { fetchRockets } from "@/app/services/getRocket";
import RocketList from "../ui/components/rocketComponents/RocketList";

const RocketsPage = async () => {
  const rockets = await fetchRockets();

  return (
    <div className="bg-futur-dark w-10/12 flex justify-center pt-4 m-auto h-screen">
      <RocketList rockets={rockets} />
    </div>
  );
};

export default RocketsPage;
