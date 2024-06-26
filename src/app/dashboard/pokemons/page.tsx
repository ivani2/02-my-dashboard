import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { randomUUID } from "crypto";

export const metadata = {
  title: "Todos los Pokemon",
  description: "Pagina con todos los Pokemon",
  keywords: ["pokemons", "pokemons page"],
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((response) => response.json());

  const pokemons: SimplePokemon[] = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2) ?? randomUUID().toString(),
    name: pokemon.name,
  }));

  // throw new Error("Error fetching pokemons");
  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokémons <small className="text-blue-600">estático</small>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
