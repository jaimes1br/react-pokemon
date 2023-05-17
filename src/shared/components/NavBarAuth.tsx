import { useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import { NavbarLayout } from "../layout/NavbarLayout"

export const NavBarAuth = () => {

    const [ t ] = useTranslation('global');
    const navigate = useNavigate();

    const handleNavigate = (to: string) => {
        navigate(`/auth/${to}`)
    }
  
    return (
        <NavbarLayout>
            <div>
                <button 
                    className="btn btn-back me-2"
                    onClick={ () => handleNavigate('register')}>
                        {t('LOGIN.REGISTER')}
                </button>

                <button 
                    className="btn btn-back ms-2"
                    onClick={ () => handleNavigate('login')}>
                        {t('LOGIN.LOGIN')}
                </button>
            </div>
        </NavbarLayout>
  )
}
