import { NavLink } from "react-router-dom"
import { PokemonDetail, PokemonDetailFake } from "../../shared/types"
import { getColorType, pipePokemonName } from "../../helpers"
import { useAppSelector } from "../../store/hooks"

interface Props {
    pokemon: PokemonDetail | PokemonDetailFake
}

export const PokemonDatail = ({ pokemon }: Props ) => {

    const { currentPage } = useAppSelector(state => state.pokemons);
    
    const color1 = getColorType(pokemon?.types[0]);
    const color2 = getColorType(pokemon?.types[1]);
    const colors = [ color1, color2 ];

    return (
    <>
    <div className="mt-5  d-flex detail_card">
       <div className="container">
        <div className="row">
            <div className="col-6 d-flex flex-column align-items-center py-3 pkm ">
                <h2>{ pokemon?.name }</h2>
                <div className="d-flex justify-content-center align-items-center pkm_img">
                    <img 
                        loading="eager"
                        style={{backgroundImage: `radial-gradient(${color2} 33%, ${color1} 33%)`, backgroundSize: '5px 5px'}}
                        src={`${pokemon?.imageUrl}`}
                        alt={ pokemon?.name } />
                </div>
                <h3>N° {pokemon?.id}</h3>
                <div className="container mt-3">
                    <div className="row justify-content-evenly">
                        {
                            pokemon?.types.map((type,i)=> (
                                <h4 
                                    key={type}
                                    style={{ color: `${colors[i]}`, borderColor: `${colors[i]}` }}
                                    className="col-5 my-auto py-1 text-center types">
                                        { pipePokemonName(type)}
                                </h4>
                            ))
                        
                        }
                    </div>
                </div>
            </div>
            <div className="col-6 d-flex pkm_info">
                <div className="container my-auto">
                    <div className="row justify-content-evenly">
                        <h3 className="col-6">Hp</h3>
                        <h3 className="col-6 text-end">{ pokemon.stats.hp }</h3>
                    </div>
                    <div className="row justify-content-evenly">
                        <h3 className="col-6">Attack</h3>
                        <h3 className="col-6 text-end">{ pokemon.stats.attack }</h3>
                    </div>
                    <div className="row justify-content-evenly">
                        <h3 className="col-6">Defense</h3>
                        <h3 className="col-6 text-end">{ pokemon.stats.defense }</h3>
                    </div>
                    <div className="row justify-content-evenly">
                        <h3 className="col-6">Special-attack</h3>
                        <h3 className="col-6 text-end">{ pokemon.stats["special-attack"]}</h3>
                    </div>
                    <div className="row justify-content-evenly">
                        <h3 className="col-6">Special-defense</h3>
                        <h3 className="col-6 text-end">{ pokemon.stats["special-defense"] }</h3>
                    </div>
                    <div className="row justify-content-evenly">
                        <h3 className="col-6">Speed</h3>
                        <h3 className="col-6 text-end">{ pokemon.stats.speed }</h3>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
    <div className="d-flex justify-content-end mt-5">
        <NavLink to={`/search?page=${currentPage}`}>
             <button className="btn btn-back">Regresar</button>
        </NavLink>
    </div>
    </>
  )
}
