"use server";
import { unstable_cache } from "next/cache";


export const getPokemons = unstable_cache(
    async (name: string) => {
      console.log("fetching pokemons " + name);
      return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
        res.json()
      );
    },
    ["pok"]
  );

