// TODO:  improve load server conmonent
// use ISR to update the values

import { ClientComponent } from "@/components/client";
import { ServerComponent } from "@/components/server";
import { getPokemons } from "@/utils/fetchpok";
import { Suspense } from "react";

export default async function Home() {
  const pok = await getPokemons("ditto");

  // const time = await getTime();

  return (
    <main>
      {pok.name} 
      <ClientComponent details = {<Suspense fallback={<div>loading</div>}><ServerComponent/></Suspense>}/>
    </main>
  );
}

// const getTime = unstable_cache(() => {
//   console.log("fetching time ");
//   return Promise.resolve(Date.now());
// }, ["time"],{
//   revalidate: 5,
//   tags: ["time"],
// });
