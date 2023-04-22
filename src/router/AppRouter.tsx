import { Navigate, Route, Routes } from "react-router-dom"
import { PokedexRoutes } from "../pokedex/router/PokedexRoutes"
import { startGetAllPokemons } from "../store/pokemon/thunks";
import { useEffect } from 'react';
import { useAppDispatch } from "../store/hooks";

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
