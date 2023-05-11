import { Navigate, Route, Routes } from "react-router-dom"
import { DetailPage, FavoritesPage, HomePage, SearchPokemonPage } from "../pages"
import { Navbar } from "../../shared/components"

export const PokedexRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
            <Route path="/" element={ <HomePage/> }/>
            <Route path="/search" element={ <SearchPokemonPage/> }/>
            <Route path="/detail/:id" element={ <DetailPage/> }/>
            <Route path="/favorites" element={ <FavoritesPage/> }/>
            <Route path="*" element={ <Navigate to='/'/> }/>
        </Routes>
      </div>
    </>
  )
}
