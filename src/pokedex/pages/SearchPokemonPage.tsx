import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { Pagination } from "../components/Pagination"
import { PokemonCard } from "../components/PokemonCard"
import { SearchBar } from "../components/SearchBar"
import { useEffect } from "react";
import { getAllPokemons } from "../../helpers/getAllPokemons";

export const SearchPokemonPage = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const { page = '' }= queryString.parse( location.search );
 
  useEffect(() => {
    //TODO: cambiar el rango de pokemones dependiendo el numero de pagina
    console.log('cambio el valor de page re-organizamos lista de cards');
  
  }, [page])
  
  return (
    <>  
        <SearchBar/>
        <div className="container mt-4">
            <div className="row">
              {/* TODO: usar un arreglo para traer todos los pokemones disponibles en la pagina */}
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
            </div>
        </div>
        <Pagination/>
    </>
  )
}
