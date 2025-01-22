import { useRocketSelection } from "@/app/contexts/rocketContext";
import { Race } from "@/app/domain/race";

type StartButtonProps = {
  startTheRace: (
    rocketId1: string,
    rocketId2: string
  ) => Promise<Race | undefined>;
};
const StartButton = ({ startTheRace }: StartButtonProps) => {
  const { selectedRockets } = useRocketSelection();
  const isDisabled = selectedRockets.length < 2;

  return (
    <button
      onClick={() => startTheRace(selectedRockets[0].id, selectedRockets[1].id)}
      className={`p-4 w-40 h-40  uppercase 
    text-2xl font-bold rounded-full border-8 
    transition-colors duration-1000 ease-in-out
    
    ${
      isDisabled
        ? "border-slate-600 text-slate-600 bg-slate-200"
        : "border-red-600 text-red-600 bg-red-200 shadow-2xl shadow-red-500"
    }
    `}
    >
      Start the Race
    </button>
  );
};

export default StartButton;
