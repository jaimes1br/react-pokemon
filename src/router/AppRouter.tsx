import { useEffect } from 'react';
import { Navigate, Route, Routes } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { PokedexRoutes } from "../pokedex/router/PokedexRoutes"
import { startGetAllPokemons } from "../store/pokemon/thunks";
import { AuthRoutes } from '../auth/routes/AuthRoutes';

export const AppRouter = () => {

  const dispatch = useAppDispatch();

    const { status } = useAppSelector( state => state.auth);

  useEffect(() => {
    dispatch( startGetAllPokemons() );
  },[])

  useEffect(() => {
    console.log(status);
    
  },[status])

  return (
    <Routes>
        {/* <Route path="/*" element={ <PokedexRoutes/> }/> */}
        <Route path="/auth/*" element={ <AuthRoutes/>} />
        
        <Route path="/*" element={ <Navigate to='/auth/login'/> }/>

    </Routes>
  )
}
