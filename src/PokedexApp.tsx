import { AppRouter } from "./router/AppRouter"
import { useEffect } from 'react';
import { useAppDispatch } from "./store/hooks";
import { startGetAllPokemons } from "./store/pokemon/thunks";


export const PokedexApp = () => {
 
  return (
    <AppRouter/>
  )
}
