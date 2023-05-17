import { Link } from "react-router-dom"
interface Props {
    children: string | JSX.Element | JSX.Element[] 
}

export const NavbarLayout = ({ children }: Props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
        <div className="container-fluid d-flex align-items-center">
            <div className="d-flex flex-row align-items-center" >
                <img
                    alt="pokeball"
                    src="/assets/pokeball-nav.png"
                    className="d-inline-block align-text-top"
                    width='64'
                    height='64'
                />
                <Link className="navbar-brand" to="/">
                    <img 
                        alt="pokedex"
                        src="/assets/pokedex-title.png" 
                        className="d-inline-block align-text-top ms-3"
                        width='178'
                        height='64'
                    />
                </Link>
            </div>
            { children }
        </div>
    </nav>
  )
}
