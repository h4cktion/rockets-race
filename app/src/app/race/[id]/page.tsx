import { getRace } from "@/app/actions/rocket.actions";
import RocketProgress from "@/app/ui/components/rocketComponents/RocketProgess";
import { notFound } from "next/navigation";

type RaceProps = { params: Promise<{ id: string }> };

const Race = async (props: RaceProps) => {
  const params = await props.params;
  const id = params.id;
  const race = await getRace(id);

  // if (!race) notFound();

  return (
    <div>
      <h1>Rockets Progression</h1>
      // TODO: récupérer les rocketIds
      <RocketProgress raceId={id} rocketId="1" />
      <RocketProgress raceId={id} rocketId="2" />
    </div>
  );
  // return <div>Race Id : {race.id}</div>;
};

export default Race;
