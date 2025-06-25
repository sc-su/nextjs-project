"use server";
import { get } from "http";
import { unstable_cache } from "next/cache";
import { getPokemons } from "./fetchpok";


export const getRandomPokemons = unstable_cache(
    async () => {
      const offset = Math.floor(Math.random() * 1000)
      console.log("offset " + offset);
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1&offset=${offset}`).then((res) =>
        res.json() 
      ).then(data => data.results[0])
      return getPokemons(result.name);
    },
    ["pok"],
    {
      // revalidate: 10, // Revalidate every 60 seconds
      tags: ["random-pokemon"], // Optional tags for cache invalidation
    }
  );

