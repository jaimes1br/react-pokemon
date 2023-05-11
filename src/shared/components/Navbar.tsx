import { NavbarLayout } from "../layout/NavbarLayout"
import { UserDropdown } from "./UserDropdown"
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

export const Navbar = () => {
  return (
    <NavbarLayout>
      <div className="me-auto d-flex">
        <NavLink
          className={({isActive}) => `nav_item d-flex align-items-center fs-5 fw-medium p-2 me-2 ${isActive ? 'active-item' : ''}`}
          to='/'>
            <span className='material-symbols-outlined mx-1 pointer'>
                home
            </span>
            <p className="my-auto">Inicio</p>
        </NavLink>
        <NavLink
          className={({isActive}) => `nav_item d-flex align-items-center fs-5 fw-medium p-2 me-2 ${isActive ? 'active-item' : ''}`}
          to='/search?page=1'>
            <span className='material-symbols-outlined mx-1 pointer'>
                search
            </span>
            <p className="my-auto">Buscar</p>
        </NavLink>
        <NavLink
          className={({isActive}) => `nav_item d-flex align-items-center fs-5 fw-medium p-2 me-2 ${isActive ? 'active-item' : ''}`}
          to='/favorites'>
            <span className='material-symbols-outlined mx-1 pointer'>
                favorite
            </span>
            <p className="my-auto">Mis favoritos</p>
        </NavLink>
      </div>
      <UserDropdown/>
    </NavbarLayout>
  )
}
