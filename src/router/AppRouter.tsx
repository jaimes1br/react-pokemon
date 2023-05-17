import { Navigate, Route, Routes } from "react-router-dom"
import { PokedexRoutes } from "../pokedex/router/PokedexRoutes"
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
