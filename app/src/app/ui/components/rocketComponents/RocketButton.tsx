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
    <button onClick={() => selectOrDeselectRocket(rocket)}>
      <div
        className={`p-4 hidden md:flex rounded-full border-2 md:border-4  hover:shadow-xl ${
          isSelected ? "border-futur-blue bg-white" : "border-slate-500"
        } `}
      >
        <Image src={rocket.image} alt={rocket.name} width={30} height={30} />
      </div>

      <div
        className={`flex md:hidden w-full border-2 md:border-4 p-2 items-center rounded-lg ${
          isSelected ? "border-futur-blue bg-white" : "border-slate-500"
        }`}
      >
        <div className="w-3/12 flex justify-center ">
          <Image src={rocket.image} alt={rocket.name} width={30} height={30} />
        </div>
        <div
          className={`flex flex-col w-9/12 text-left  font-semibold ${
            isSelected ? "text-black" : "text-white"
          }`}
        >
          <p>{rocket.name}</p>
          <p>{rocket.description}</p>
        </div>
      </div>
    </button>
  );
};

export default RocketButton;
