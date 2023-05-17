import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setDetailPokemon } from '../../store/pokemon/pokemonSlice';
import { pokemonFake } from '../../shared/constants';
import { useTranslation } from 'react-i18next';

export const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { displayName } = useAppSelector( state => state.auth); 
    const [t] = useTranslation('global');
    const toSearch = () => {
        dispatch(setDetailPokemon(pokemonFake));
        navigate(`/search?page=1`);   
    }


  return (
    <div className="mt-3 card_dashboard ">
        <div className="container text-center mt-3">
           <h2>{t("DASHBOARD.GREETING")}{displayName }!</h2>
        </div>
        <div className="d-flex flex-column justify-content-around align-items-start container-dash_btns ">
            <NavLink
                className="btn btn_dash"
                to="/favorites">
                {t("DASHBOARD.MY_FAVORITES")}
            </NavLink>
            <button
                className="btn btn_dash"
                onClick={ toSearch }>
                {t("DASHBOARD.SEARCH_PKM")}
            </button>
            <NavLink
                className="btn btn_dash"
                to="/settings">
                {t("DASHBOARD.SETTINGS")}
            </NavLink>
        </div>
    </div>
  )
}
