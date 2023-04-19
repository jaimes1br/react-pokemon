import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { Pagination } from "../components/Pagination"
import { PokemonCard } from "../components/PokemonCard"
import { SearchBar } from "../components/SearchBar"
import { useEffect } from "react";

export const SearchPokemonPage = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const { page = '' }= queryString.parse( location.search );

  // console.log(location);
  // console.log({ page });
  
  useEffect(() => {
    // console.log('cambio el valor, entonces hacemos una peticion');
  }, [page])
  
  return (
    <>  
        <SearchBar/>
        <div className="container mt-4">
            <div className="row">
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
