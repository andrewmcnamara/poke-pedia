import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { inferQueryResponse } from "./api/trpc/[trpc]";

export default function Home() {
  const hello = trpc.hello.useQuery({ text: "client" });

  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="border flex rounded max-w-2xl">
        <PokemonCard pokemon={hello.data.pokemon} />
      </div>
    </div>
  );
}

type PokemonFromServer = inferQueryResponse<"hello">["pokemon"];

const PokemonCard: React.FC<{ pokemon: PokemonFromServer }> = ({ pokemon }) => {
  return (
    <div className="w-64 h-64 flex flex-col">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-full"
      />
      <div className="text-xl text-center capitalize mt-[-4rem]">
        {pokemon.name}
      </div>
    </div>
  );
};
