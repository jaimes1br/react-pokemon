import { Navigate, Route, Routes } from "react-router-dom"
import { PokedexRoutes } from "../pokedex/router/PokedexRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="*" element={ <PokedexRoutes/> }/>
        {/* <Route path="/" element={ <Navigate to='/'/>} /> */}

    </Routes>
  )
}
