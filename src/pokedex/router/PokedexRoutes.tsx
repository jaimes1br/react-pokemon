import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { Navbar } from "../../shared"
import { SearchPokemonPage } from "../pages/SearchPokemonPage"
import { DetailPage } from "../pages/DetailPage";
export const PokedexRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
            <Route path="/" element={ <HomePage/> }/>
            <Route path="/search" element={ <SearchPokemonPage/> }/>
            <Route path="/detail/:id" element={ <DetailPage/> }/>
        </Routes>
      </div>
    </>
  )
}
