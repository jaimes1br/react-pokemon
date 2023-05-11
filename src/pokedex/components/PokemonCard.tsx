import classnames from 'classnames';
import { NavLink } from "react-router-dom"
import { BasicPokemon } from '../../shared/types';
import { useFavorite } from '../../hooks';
interface Props {
  pokemon: BasicPokemon
}

export const PokemonCard = ({ pokemon }: Props ) => {

  const { name, isFav, handleFavorite } = useFavorite({pokemon});

  return (
    <div className="col-3 my-3"> 
      <div className={ classnames(
          'd-flex py-3 px-2 flex-column justify-content-around card_pokemon-list',
          {'card_fav': isFav },
        )}>
        <NavLink to={`/detail/${pokemon.id}`} className="d-flex flex-column link-card">
          <h6 className={classnames("card_pokemon-list--text_id ms-auto", {'card_text_id--fav': isFav})}># { pokemon.id }</h6>
          <div className="card_pokemon-list--img align-self-center">
            <img className={ classnames(
                "img-filter",
                {'img-filter_fav': isFav}
              )}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} 
                alt={ pokemon.name } />
          </div>
        </NavLink>
        <div className={ classnames(
            'd-flex align-items-center card_pokemon-list--info',
            {'card_list--info--fav': isFav}
          )}> 
            <NavLink to={`/detail/${pokemon.id}`} 
              className={ classnames(
                'card_pokemon-list--text_name align-self-center link-card free-space p-2 mb-0',
                {'card_text_name--fav': isFav }
              )}>
                { name }
            </NavLink>
            <span 
             className={ classnames(
              'material-symbols-outlined ms-1 pointer', 
                {'icon_heart--active': isFav },
                {'icon_heart--no_active': !isFav },
              )}
              onClick={ handleFavorite }>
                favorite
            </span>
        </div>
      </div>
    </div>
  )
}
