import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';

import { Pagination } from "../components/Pagination"
import { PokemonCard } from "../components/PokemonCard"
import { SearchBar } from "../components/SearchBar"
import { useAppSelector } from "../../store/hooks";
import { BasicPokemon } from "../../shared/types/types";

export const SearchPokemonPage = () => {
  
  const [listPokemonPage, setListPokemonPage] = useState<BasicPokemon[]>([]);
  const { isLoading, allPokemons = [], currentPage} = useAppSelector( state => state.pokemons);

  const setPokemonsPage = () => {
    setListPokemonPage(allPokemons.slice((currentPage - 1) * 16, (currentPage * 16)));
  }

  useEffect(() => {
    setPokemonsPage();            
  }, [currentPage])

  useEffect(() => {
    setPokemonsPage();            
  },[allPokemons])
  
  return (
    <>  
        <SearchBar/>
        <div className="container mt-4">
            <div className="row">
                {
                  listPokemonPage.map((pkm,i)=> (
                    <PokemonCard 
                      key={i}
                      pokemon={pkm}
                      />
                  ))
                }
            </div>
        </div>
        <Pagination/>
    </>
  )
}
