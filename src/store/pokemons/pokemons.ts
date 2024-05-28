import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

/*
{
  favorites:{
    '1':{id:25, name:'pikachu'},
  }
}
*/
interface FavoritePokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = (): FavoritePokemonsState => {
//   if (typeof localStorage === "undefined") return {favorites: {}};
//   const favorites = JSON.parse(
//     localStorage.getItem("favorite-pokemons") ?? "{}"
//   );
//   return favorites;
// };

const initialState: FavoritePokemonsState = {
  // "6": { id: "6", name: "charizard" },
  // "151": { id: "151", name: "mew" },
  // "25": { id: "25", name: "pikachu" },
  // ...getInitialState(),
  favorites: {},
};

const pokemonsSlice = createSlice({
  name: "favoritePokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }
      //TODO: No se debe hacer en Redux
      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
