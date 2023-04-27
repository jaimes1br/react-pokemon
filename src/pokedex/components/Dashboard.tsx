import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { setDetailPokemon } from '../../store/pokemon/pokemonSlice';
import { pokemonFake } from '../../shared/constants';

export const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const toSearch = () => {
        dispatch(setDetailPokemon(pokemonFake));
        navigate(`/search?page=1`);   
    }


  return (
    <div className="mt-5 card_dashboard ">
        <div className="d-flex flex-column justify-content-around align-items-start container-dash_btns ">
            <NavLink
                className="btn btn_dash"
                to="/favorites">
                Mis favoritos
            </NavLink>
            <button
                className="btn btn_dash"
                onClick={ toSearch }>
                Buscar Pokemon
            </button>
            <NavLink
                className="btn btn_dash"
                to="/settings">
                Editar tu información
            </NavLink>
        </div>
    </div>
  )
}
