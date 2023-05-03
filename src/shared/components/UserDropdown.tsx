import { startLogout } from "../../store/auth/thunks";
import { useAppDispatch } from "../../store/hooks";

export const UserDropdown = () => {

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch( startLogout() );
  } 

  return (
    <div className="btn-group dropstart">
        <button className="btn dropdown-toggle d-flex" data-bs-toggle="dropdown">
            <img 
                src="https://i.pravatar.cc/150?u=jaimes" 
                alt="user_img" 
                className="btn_user align-self-center "
            />
        </button>

        <ul className="dropdown-menu">
            <li className="dropdown-item drop-item">Action</li>
            <li className="dropdown-item drop-item">Another action</li>   
            <li><hr className="dropdown-divider"/></li>
            <li className="dropdown-item drop-item" onClick={ handleLogout }>Logout</li>
        </ul>
    </div>
  )
}
