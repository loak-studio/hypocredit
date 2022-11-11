const getTeam = async () => {
  const req = await fetch(import.meta.env.API + "/api/teams?populate=*");
  return (await req.json()).data;
};

export { getTeam };
