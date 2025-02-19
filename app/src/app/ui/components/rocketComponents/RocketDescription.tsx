import { useRocketSelection } from "@/app/contexts/rocketContext";
import { Rocket } from "@/app/domain/rocket";

const fillWithPlaceholders = (rockets: Rocket[], count: number): Rocket[] => {
  const filledRockets = [...rockets];
  while (filledRockets.length < count) {
    filledRockets.push({
      id: `placeholder-${filledRockets.length}`,
      name: "Sélectionnez une fusée",
      description: "",
      image: "",
    });
  }
  return filledRockets;
};

const RocketDescription = () => {
  const { selectedRockets } = useRocketSelection();
  const filledRockets = fillWithPlaceholders(selectedRockets, 2);

  return (
    <div className="hidden md:flex flex-col md:flex-row gap-4">
      {filledRockets.map((rocket) => (
        <div
          key={rocket.id}
          className="w-[300px] h-[128px] font-bold mt-4 border-4 rounded-md border-[#50394c]  text-white flex flex-col p-6"
        >
          <p className="text-center text-xl pb-2">{rocket.name}</p>
          <p className="text-center">{rocket.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RocketDescription;
