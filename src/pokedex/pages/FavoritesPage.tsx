import { NavLink } from "react-router-dom"
import { BasicPokemon } from "../../shared/types";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { Loader } from "../../shared";
import { PokemonCard } from "../components";

export const FavoritesPage = () => {
  
  const [ listPokemonPage, setListPokemonPage ] = useState<BasicPokemon[]>([]);
  const { allPokemons = [], favPokemons } = useAppSelector(state => state.pokemons);
  const [ isEmptyFav, setIsEmptyFav ] = useState<boolean>(false);
  const [ isLoadingFavs, setIsLoadingFavs] = useState<boolean>(true);
  const [ numFav, setNumFav ] = useState<number>(0);


  const setPokemonPage = () => {
    setNumFav(favPokemons.length);
    setIsEmptyFav(false);
    const temp = favPokemons.map( fav => allPokemons[fav - 1]);

    setListPokemonPage(temp);
    setIsLoadingFavs(false)
  }

  useEffect(() => {
    
    if(allPokemons.length > 0 && favPokemons.length > 0) setPokemonPage();
    if(favPokemons.length === 0) {
      setIsEmptyFav(true);
      setIsLoadingFavs(false);
    }
  },[ allPokemons, favPokemons ])
 
  return (
    <>
      { (isLoadingFavs) && <Loader/>}
      { (!isLoadingFavs) && 
        <>
          <div className="container mt-4">
            <div>
              <h3 className="text-center">Mis pokemons favoritos</h3>
              <hr className="hr-div"/>
              <div className="d-flex justify-content-end align-text-top">
                <img
                  alt="pokeball"
                  src="/assets/pokeball-nav.png"
                  className="d-inline-block"
                  width='30'
                  height='30'
                />
                <h5 className="ms-2">{ numFav }</h5>
              </div>
            </div>
          </div>
            { 
              (isEmptyFav ) && 
                <div className="d-flex flex-column align-items-center 
                text-center">
                  <span className="material-symbols-outlined icon-size-sad">
                    sentiment_dissatisfied
                  </span>
                  <h1 className="notPokemons my-2">Uppss...</h1>
                  <h5 className="mt-2 mb-5">Aún no tienes pokemones favoritos.</h5>
                  <NavLink 
                    className='btn btn-back font-search'
                    to={'/search?page=1'}>
                      <span className="material-symbols-outlined align-middle me-1">
                        search
                      </span>
                      Buscar
                  </NavLink>
                </div>
            
            }
            {
              (!isEmptyFav ) &&
                <div className="row justify-content-center">
                  {
                    listPokemonPage.map((pkm,i) => (
                      <PokemonCard key={i} pokemon={pkm}/>
                    ))
                  }
                </div>
            }
        </>
      }
    </>
  )
}
