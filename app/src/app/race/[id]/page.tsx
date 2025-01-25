import { getRace } from "@/app/actions/rocket.actions";
import RaceResult from "@/app/ui/components/rocketComponents/RaceResult";
import RocketRace from "@/app/ui/components/rocketComponents/RocketRace";

import { notFound } from "next/navigation";

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
  const race = await getRace(id);

  if ((!race && !rocketId1) || !rocketId2) notFound();

  return (
    <>
      {!race.id && (
        <RocketRace raceId={id} rocketAId={rocketId1} rocketBId={rocketId2} />
      )}
      {race.id && <RaceResult race={race} />}
    </>
  );
};

export default Race;
