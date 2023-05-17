import { useNavigate } from "react-router-dom"
import classnames from 'classnames';
import { useTranslation } from "react-i18next"
import { PokemonDetail, PokemonDetailFake } from "../../shared/types"
import { pokemonFake } from "../../shared/constants"
import { getColorType } from "../../helpers"
import { useFavorite } from "../../hooks"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { setDetailPokemon } from "../../store/pokemon/pokemonSlice"

interface Props {
    pokemon: PokemonDetail | PokemonDetailFake
}

export const PokemonDatail = ({ pokemon }: Props ) => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [ t ] = useTranslation('global');

    const { isFav, handleFavorite } = useFavorite({pokemon });
    const { currentPage } = useAppSelector(state => state.pokemons);
    
    const color1 = getColorType(pokemon?.types[0]);
    const color2 = getColorType(pokemon?.types[1]);
    const colors = [ color1, color2 ];

    const toBack = () => {
        dispatch(setDetailPokemon(pokemonFake));
        navigate(`/search?page=${currentPage}`);   
    }

    return (
    <>
    <div className="mt-5  d-flex detail_card">
       <div className="container">
        <div className="row">
            <div className="col-6 d-flex flex-column align-items-center py-3 pkm ">
                <div className="container d-flex justify-content-center align-items-center">
                    <span 
                        className={ classnames(
                        'material-symbols-outlined pointer me-3',
                         {'icon_heart--active': isFav },
                         {'icon_heart--no_active': !isFav },
                        )}
                        onClick={ handleFavorite }>
                        favorite
                    </span>
                    <h2 className="">{ pokemon?.name }</h2>
                </div>
                <div className="d-flex justify-content-center align-items-center pkm_img">
                    <img 
                        loading="eager"
                        style={{backgroundImage: `radial-gradient(${color2} 33%, ${color1} 33%)`, backgroundSize: '5px 5px'}}
                        src={`${pokemon?.imageUrl}`}
                        alt={ pokemon?.name } />
                </div>
                <h3>N° {pokemon?.id}</h3>
                <div className="container mt-3">
                    <div className="row justify-content-evenly">
                        {
                            pokemon?.types.map((type,i)=> (
                                <h4 
                                    key={type}
                                    style={{ color: `${colors[i]}`, borderColor: `${colors[i]}` }}
                                    className="col-5 my-auto py-1 text-center types">
                                        { t(`TYPES_PKM.${type.toUpperCase()}`)}
                                </h4>
                            ))
                        
                        }
                    </div>
                </div>
            </div>
            <div className="col-6 d-flex pkm_info">
                <div className="container my-auto">
                    <div className="row justify-content-around">
                        <h3 className="col-8">{t('DETAILS.HP')}</h3>
                        <h3 className="col-3 text-center align-self-center">{ pokemon.stats.hp }</h3>
                    </div>
                    <div className="row justify-content-around">
                        <h3 className="col-8">{t('DETAILS.ATTACK')}</h3>
                        <h3 className="col-3 text-center align-self-center">{ pokemon.stats.attack }</h3>
                    </div>
                    <div className="row justify-content-around">
                        <h3 className="col-8">{t('DETAILS.DEFENSE')}</h3>
                        <h3 className="col-3 text-center align-self-center">{ pokemon.stats.defense }</h3>
                    </div>
                    <div className="row justify-content-around">
                        <h3 className="col-8">{t('DETAILS.SPECIAL_ATTACK')}</h3>
                        <h3 className="col-3 text-center align-self-center">{ pokemon.stats["special-attack"]}</h3>
                    </div>
                    <div className="row justify-content-around">
                        <h3 className="col-8">{t('DETAILS.SPECIAL_DEFENSE')}</h3>
                        <h3 className="col-3 text-center align-self-center">{ pokemon.stats["special-defense"] }</h3>
                    </div>
                    <div className="row justify-content-around">
                        <h3 className="col-8">{t('DETAILS.SPEED')}</h3>
                        <h3 className="col-3 text-center align-self-center">{ pokemon.stats.speed }</h3>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
    <div className="d-flex justify-content-end my-5">
        <button className="btn btn-back" onClick={ toBack }>{t('DETAILS.BACK')}</button>
    </div>
    </>
  )
}
