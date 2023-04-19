
export const UserDropdown = () => {
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
            <li className="dropdown-item">Action</li>
            <li className="dropdown-item">Another action</li>   
            <li><hr className="dropdown-divider"/></li>
            <li className="dropdown-item">Something else here</li>
        </ul>
    </div>
  )
}
