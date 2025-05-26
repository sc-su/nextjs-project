"use server";
import { getPokemons } from "@/utils/fetchpok";

export const ServerComponent = async () => {
  const pok = await getPokemons("ditto");
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("ServerComponent: ", pok.name);
  return (
    <div>
    
      <div>{pok.weight} kg</div>
      <div>{pok.height} cm</div>
    </div>
  );
};
