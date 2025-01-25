import { Race } from "@/app/domain/race";

const determineWinner = (race: Race) => {
  const { rocket1, rocket2 } = race;

  if (rocket1.exploded) return rocket2.id;
  if (rocket2.exploded) return rocket1.id;

  if (rocket1.progress === 100) return rocket1.id;
  if (rocket2.progress === 100) return rocket2.id;

  return null;
};

const RaceResult = ({ race }: { race: Race }) => {
  const winner = determineWinner(race);

  return (
    <div className="w-full flex justify-center h-screen items-center text-white text-2xl font-semibold">
      {winner && <p>La rocket {winner} à gagné la course</p>}
      {!winner && <p>Il n'y a pas de vainqueur pour cette fois !</p>}
    </div>
  );
};

export default RaceResult;
