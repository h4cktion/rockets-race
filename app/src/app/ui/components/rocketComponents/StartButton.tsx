import { Rocket } from "@/app/domain/rocket";

const StartButton = ({
  rockets,
  startTheRace,
}: {
  rockets: Rocket[];
  startTheRace: () => void;
}) => {
  return (
    <button
      onClick={startTheRace}
      className={`p-4 w-40 h-40  uppercase 
    text-2xl font-bold rounded-full border-8 
    transition-colors duration-1000 ease-in-out
    
    ${
      rockets.length < 2
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
