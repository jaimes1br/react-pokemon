import { useNavigate } from "react-router-dom"
import { NavbarLayout } from "../layout/NavbarLayout"

export const NavBarAuth = () => {
    const navigate = useNavigate();

    const handleNavigate = (to: string) => {
        navigate(`/auth/${to}`)
    }
  
    return (
    <>
        <NavbarLayout>
            <div>
                <button 
                    className="btn btn-back me-2"
                    onClick={ () => handleNavigate('register')}>
                        Registro
                </button>

                <button 
                    className="btn btn-back ms-2"
                    onClick={ () => handleNavigate('login')}>
                        Acceder
                </button>
            </div>
        </NavbarLayout>

    </>
  )
}
