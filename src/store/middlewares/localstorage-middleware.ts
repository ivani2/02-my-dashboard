import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {

    next(action);

    console.log('action: ', action);
    console.log("state desde middleware: ", { state: state.getState() });
    if(action.type === 'favoritePokemons/toggleFavorite'){
        localStorage.setItem("favorite-pokemons", JSON.stringify(state.getState().favoritePokemons));
    }
  };
};
