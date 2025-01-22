const Race = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const id = params.id;

  return <div>Race Id : {id}</div>;
};

export default Race;
