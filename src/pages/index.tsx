import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

export default function Home() {
  const hello = trpc.hello.useQuery({ text: "client" });
  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center">
      <div className="border rounded">{hello.data.greeting}</div>
      <img
        src={hello.data.pokemon.sprites.front_default}
        alt={hello.data.pokemon.name}
      />
    </div>
  );
}
