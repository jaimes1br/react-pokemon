import { useEffect, useState } from "react";

import { Pagination, PokemonCard, SearchBar } from "../components"
import { useAppSelector } from "../../store/hooks";
import { BasicPokemon } from "../../shared/types";

export const SearchPokemonPage = () => {
  
  const [ listPokemonPage, setListPokemonPage ] = useState<BasicPokemon[]>([]);
  const { allPokemons = [], currentPage} = useAppSelector( state => state.pokemons );

  const setPokemonsPage = () => {
    setListPokemonPage(allPokemons.slice((currentPage - 1) * 16, (currentPage * 16)));
  }

  useEffect(() => {
    setPokemonsPage();            
  },[allPokemons,currentPage])
  
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
