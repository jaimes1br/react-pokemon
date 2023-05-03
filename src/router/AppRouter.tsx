import { useEffect } from 'react';
import { Navigate, Route, Routes } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { PokedexRoutes } from "../pokedex/router/PokedexRoutes"
import { startGetAllPokemons } from "../store/pokemon/thunks";
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useCheckAuth } from '../hooks/useCheckAuth';
import { Loader } from '../shared';

export const AppRouter = () => {

  const { status } = useCheckAuth();

  if( status === 'checking'){
    return <Loader/>
  }

  return (
    <Routes>
      {
        ( status === 'authenticated')
          ? <Route path="/*" element={ <PokedexRoutes/>}/>
          : <Route path="/auth/*" element={ <AuthRoutes/>}/>
      }
      <Route path="/*" element={ <Navigate to='/auth/login'/> }/>
    </Routes>
  )
}
