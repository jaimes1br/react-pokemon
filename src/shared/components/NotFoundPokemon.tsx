import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../store/hooks";
interface Props {
    pokemon: string
}

export const NotFoundPokemon = ({ pokemon }: Props) => {
    const { currentPage } = useAppSelector(state => state.pokemons);
    const [ t ] = useTranslation('global');

    return (
        <div className="container d-flex 
                        flex-column
                        justify-content-center 
                        align-items-center 
                        text-center 
                        notFound_container
                        mt-1">
            <div className="notFound_title my-2">
                <h1>{t('NOT_FOUND.TITLE')}</h1>
            </div>
            <div className="notFound_message">
                <h4>{t('NOT_FOUND.THE_POKEMON')} { pokemon } {t('NOT_FOUND.NOT_EXIST')}</h4>
            </div>
            <div className="notFound_codeNumber t-stroke t-shadow">
                404
            </div>
            <div className="notFound_pokedex">
                <img 
                    alt="pokedex"
                    src="/assets/pokedex-title.png" 
                    className="d-inline-block align-text-top ms-3"
                    width='130'
                    height='48'
                />
            </div>
            <div className="notFound_btn mt-5">
                <NavLink to={`/search?page=${currentPage}`}>
                    <button type="button" className="btn btn-lg btn-back">{t('NOT_FOUND.SEARCH_PKM')}</button>
                </NavLink>
            </div>
        </div>
    ) 
}
