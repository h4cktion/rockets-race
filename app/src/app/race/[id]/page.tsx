import { getRace } from "@/app/actions/rocket.actions";
import { notFound } from "next/navigation";

type RaceProps = { params: Promise<{ id: string }> };

const Race = async (props: RaceProps) => {
  const params = await props.params;
  const id = params.id;
  const race = await getRace(id);
  console.log("-----> race", race);

  if (!race) notFound();

  return <div>Race Id : {id}</div>;
  // return <div>Race Id : {race.id}</div>;
};

export default Race;
