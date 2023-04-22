import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom"
import { useAppDispatch } from "../store/hooks";
import { PokedexRoutes } from "../pokedex/router/PokedexRoutes"
import { startGetAllPokemons } from "../store/pokemon/thunks";

export const AppRouter = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch( startGetAllPokemons() );
  },[])

  return (
    <Routes>
        <Route path="*" element={ <PokedexRoutes/> }/>
        {/* <Route path="/" element={ <Navigate to='/'/>} /> */}

    </Routes>
  )
}
