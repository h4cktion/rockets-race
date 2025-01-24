// import { getRace } from "@/app/actions/rocket.actions";
import RocketProgress from "@/app/ui/components/rocketComponents/RocketProgess";
// import { notFound } from "next/navigation";

type RaceProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    rocketId1: string;
    rocketId2: string;
  }>;
};

const Race = async (props: RaceProps) => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const rocketId1 = searchParams?.rocketId1;
  const rocketId2 = searchParams?.rocketId2;
  const id = params.id;
  // const race = await getRace(id);

  // if (!race) notFound();

  return (
    <div>
      <h1>Rockets Progression</h1>
      <RocketProgress raceId={id} rocketId={rocketId1} />
      <RocketProgress raceId={id} rocketId={rocketId2} />
    </div>
  );
  // return <div>Race Id : {race.id}</div>;
};

export default Race;
