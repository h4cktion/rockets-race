import { fetchRockets } from "@/app/services/getRocket";
import Image from "next/image";

const RocketsPage = async () => {
  const rockets = await fetchRockets();

  return (
    <div>
      <h1>Liste des Fusées</h1>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            <Image
              src={rocket.image}
              alt={rocket.name}
              width={30}
              height={30}
            />
            <h2>{rocket.name}</h2>
            <p>{rocket.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RocketsPage;
