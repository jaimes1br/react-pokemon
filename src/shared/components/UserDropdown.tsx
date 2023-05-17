import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { startLogout } from "../../store/auth/thunks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const UserDropdown = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [ t ] = useTranslation('global');
  const { photoURL } = useAppSelector( state => state.auth);

  const handleNavigation = (path: string) => {
    //TODO add navigation values
    navigate(``);   
  }

  const handleLogout = () => {
    dispatch( startLogout() );
  } 

  return (
    <div className="btn-group dropstart">
        <button className="btn dropdown-toggle d-flex" data-bs-toggle="dropdown">
            <img 
                src={ photoURL || "https://i.pravatar.cc/150?u=error"} 
                alt="user_img" 
                className="btn_user align-self-center "
            />
        </button>

        <ul className="dropdown-menu">
            <li 
              className="dropdown-item drop-item" 
              onClick={() => handleNavigation('/favorites')}>
                {t('USER_DROP.FAVORITES')}
            </li>
            <li 
              className="dropdown-item drop-item"
              onClick={() => handleNavigation('/home')}>
                {t('USER_DROP.SETTINGS')}
            </li>   
            <li><hr className="dropdown-divider"/></li>
            <li 
              className="dropdown-item drop-item" 
              onClick={ handleLogout }>
                {t('USER_DROP.LOGOUT')}
            </li>
        </ul>
    </div>
  )
}
