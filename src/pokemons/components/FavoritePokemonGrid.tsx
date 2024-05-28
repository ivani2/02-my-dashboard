"use client";
import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setFavoritePokemons } from "@/store/pokemons/pokemons";

export const FavoritePokemonGrid = () => {

  const dispatcher = useDispatch();

  const favoritePokemonStored = useAppSelector((store) =>
    Object.values(store.favoritePokemons.favorites)
  );

  // const [pokemons, setPokemons] = useState(favoritePokemonStored);

  // useEffect(() => {
  //   // console.log({ favoritePokemonStored });
  //   // // dispatcher( setFavoritePokemons(pokemons) )
  //   // setPokemons(favoritePokemonStored); //
  // }, [favoritePokemonStored]);


  return (
    <>
      {favoritePokemonStored.length > 0 ? (
        <PokemonGrid pokemons={favoritePokemonStored} />
      ) : (
        <NoFavorites />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={50} className="text-red-500" />
      <span>
        No hay favoritos. Comienza a{" "}
        <Link href={"/dashboard/pokemons"} className="text-blue-700">
          agregar.
        </Link>
      </span>
    </div>
  );
};
