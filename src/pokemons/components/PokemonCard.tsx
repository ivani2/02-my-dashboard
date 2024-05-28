"use client";
import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemon;
}
export default function PokemonCard({ pokemon }: Props) {
  const { id, name } = pokemon;

  const isFavorite = useAppSelector((store) => !!store.favoritePokemons.favorites[id]);
  const dispatcher = useDispatch();
  const onToggle = () => {
    dispatcher(toggleFavorite(pokemon));
  };
  return (
    <>
      <div className="mx-auto right-0 mt-2 w-60">
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
            <Image
              key={pokemon.id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
              {name}
            </p>
            <div className="mt-5">
              <Link
                href={`/dashboard/pokemons/${name}`}
                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              >
                Detalles del Pokémon
              </Link>
            </div>
          </div>
          <div className="border-b">
            <div
              onClick={onToggle}
              className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
            >
              <div className="text-red-600">
                {isFavorite ? <IoHeart /> : <IoHeartOutline />}
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  Agregar a favoritos
                </p>
                <p className="text-xs text-gray-500">No es de tus favoritos</p>
              </div>
            </div>
            <Link href="/" className="px-4 py-2 hover:bg-gray-100 flex">
              <div className="text-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  Agregarlo a grupo
                </p>
                <p className="text-xs text-gray-500">
                  Elige a qué grupo pertenece este Pokemon
                </p>
              </div>
            </Link>
          </div>

          <div className="">
            <Link
              href={"#"}
              className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex"
            >
              <p className="text-sm font-medium text-gray-800 leading-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="h-4 w-4 text-gray-800 fill-current animate-spin"
                  width="32"
                  height="32"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M988 548c-19.9 0-36-16.1-36-36c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3c.1 19.9-16 36-35.9 36z"
                  ></path>
                </svg>{" "}
                Logout
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
