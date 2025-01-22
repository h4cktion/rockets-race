const Race = async (props: {
  searchParams?: Promise<{
    rocketA?: string;
    rocketB?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const rocketA = searchParams?.rocketA || "";
  const rocketB = searchParams?.rocketB || "";

  return (
    <div>
      {rocketA} VS {rocketB}
    </div>
  );
};

export default Race;
