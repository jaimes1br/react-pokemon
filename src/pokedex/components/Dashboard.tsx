import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div className="mt-5 card_dashboard ">
        <div className="d-flex flex-column justify-content-around align-items-start container-dash_btns ">
            <NavLink
                className="btn btn_dash"
                to="/favorites">
                Mis favoritos
            </NavLink>
            <NavLink
                className="btn btn_dash"
                to="/search?page=1">
                Buscar Pokemon
            </NavLink>
            <NavLink
                className="btn btn_dash"
                to="/settings">
                Editar tu información
            </NavLink>
        </div>
    </div>
  )
}
