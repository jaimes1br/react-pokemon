import { NavLink } from "react-router-dom"
import { BasicPokemon } from '../../shared/types';
import { pipePokemonName } from "../../helpers";
import { useMemo } from 'react';
interface Props {
  pokemon: BasicPokemon
}

export const PokemonCard = ({ pokemon }: Props ) => {
  
  const name = useMemo(() => {
    return pipePokemonName(pokemon.name);

  },[pokemon.name]);

  return (
    <NavLink to={`/detail/${pokemon.id}`} className="col-3 my-3 link-card" >
        <div className="d-flex py-3 px-2 flex-column justify-content-around card_pokemon-list" >
            <h6 className="card_pokemon-list--text_id ms-auto"># { pokemon.id }</h6>
            <div className="card_pokemon-list--img align-self-center">
                <img className="img-filter" 
                     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} 
                     alt={ pokemon.name } />
            </div>
            <div className="d-flex align-items-center card_pokemon-list--info py-2" >
                <h4 
                  className="card_pokemon-list--text_name free-space ps-2">
                    { name }
                </h4>
                <span className="material-symbols-outlined icon_heart">favorite</span>
            </div>
        </div>
    </NavLink>
  )
}
