import { NavLink } from "react-router-dom"

export const PokemonCard = () => {
  return (
    <NavLink to="/detail/23" className="col-3 my-3 link-card" >
        <div className="d-flex py-3 px-2 flex-column justify-content-around card_pokemon-list" >
            <h6 className="card_pokemon-list--text_id ms-auto">#789</h6>
            <div className="card_pokemon-list--img align-self-center">
                <img className="img-filter" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png" alt="" />
            </div>
            <div className="d-flex align-items-center card_pokemon-list--info py-2" >
                <h4 className="card_pokemon-list--text_name free-space">Pokemon name</h4>
                <span className="material-symbols-outlined icon_heart">favorite</span>
            </div>
        </div>
    </NavLink>
  )
}
