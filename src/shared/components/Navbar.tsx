import { NavbarLayout } from "../layout/NavbarLayout"
import { UserDropdown } from "./UserDropdown"
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [t] = useTranslation('global');

  return (
    <NavbarLayout>
      <div className="me-auto d-flex">
        <NavLink
          className={({isActive}) => `nav_item d-flex align-items-center fs-5 fw-medium p-2 me-2 ${isActive ? 'active-item' : ''}`}
          to='/'>
            <span className='material-symbols-outlined mx-1 pointer'>
                home
            </span>
            <p className="my-auto">{t('NAVBAR.HOME')}</p>
        </NavLink>
        <NavLink
          className={({isActive}) => `nav_item d-flex align-items-center fs-5 fw-medium p-2 me-2 ${isActive ? 'active-item' : ''}`}
          to='/search?page=1'>
            <span className='material-symbols-outlined mx-1 pointer'>
                search
            </span>
            <p className="my-auto">{t('NAVBAR.SEARCH')}</p>
        </NavLink>
        <NavLink
          className={({isActive}) => `nav_item d-flex align-items-center fs-5 fw-medium p-2 me-2 ${isActive ? 'active-item' : ''}`}
          to='/favorites'>
            <span className='material-symbols-outlined mx-1 pointer'>
                favorite
            </span>
            <p className="my-auto">{t('NAVBAR.MY_FAVORITES')}</p>
        </NavLink>
      </div>
      <UserDropdown/>
    </NavbarLayout>
  )
}
