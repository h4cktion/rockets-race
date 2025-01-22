const Race = async (props: {
  searchParams?: Promise<{
    id?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const raceId = searchParams?.id || "";

  return <div>Race Id : {raceId}</div>;
};

export default Race;
