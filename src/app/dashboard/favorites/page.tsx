import { FavoritePokemonGrid } from "@/pokemons";

export const metadata = {
  title: "Todos los Pokemon",
  description: "Pagina con todos los Pokemon",
  keywords: ["pokemons", "pokemons page"],
};

export default async function FavoritePokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokémon favoritos <small className="text-blue-600">Global State</small>
      </span>

      <FavoritePokemonGrid />
    </div>
  );
}
