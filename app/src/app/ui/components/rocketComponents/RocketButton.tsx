import { useRocketSelection } from "@/app/contexts/rocketContext";
import { Rocket } from "@/app/domain/rocket";
import Image from "next/image";

type RocketButtonProps = {
  rocket: Rocket;
};

const RocketButton = ({ rocket }: RocketButtonProps) => {
  const { selectedRockets, selectOrDeselectRocket } = useRocketSelection();
  const isSelected = selectedRockets.some((r) => r.id === rocket.id);
  return (
    <button
      className={`p-6 rounded-full border-4  hover:shadow-xl ${
        isSelected ? "border-futur-blue bg-white" : "border-slate-500"
      } `}
      onClick={() => selectOrDeselectRocket(rocket)}
    >
      <Image src={rocket.image} alt={rocket.name} width={30} height={30} />
    </button>
  );
};

export default RocketButton;
