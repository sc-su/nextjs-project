"use server";
import { getPokemons } from "@/utils/fetchpok";
import { getRandomPokemons } from "@/utils/fetchpok-random";

export const ServerComponent = async () => {
  // const pok = await getPokemons("ditto");
  const pok = await getRandomPokemons(); 
  console.log("pok>>>: ", pok);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("ServerComponent: ", pok.name);
  return (
    <div>
      <div>{pok.weight} kg</div>
      <div>{pok.height} cm</div>
    </div>
  );
};
