import { NavLink } from "react-router-dom"

export const DetailPage = () => {
  return (
    <>
    <div className="mt-5  d-flex detail_card">
       <div className="container">
        <div className="row">
            <div className="col-6 d-flex flex-column align-items-center py-3 pkm ">
                <h2>Pokemon name</h2>
                <div className="d-flex justify-content-center align-items-center pkm_img">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png" alt="pkm" />
                </div>
                <h3>N° 34</h3>
                <div className="container mt-3">
                    <div className="row justify-content-evenly">
                        <h4 className="col-5 my-auto py-1 text-center types">Tipo dos</h4>
                        <h4 className="col-5 my-auto py-1 text-center types">Tipo uno</h4>
                    </div>
                </div>
            </div>
            <div className="col-6 d-flex pkm_info">
                <div className="container my-auto">
                    <div className="row justify-content-evenly">
                        <h3 className="col-6">Hp</h3>
                        <h3 className="col-6 text-end">45</h3>
                    </div>
                    <div className="row justify-content-evenly">
                        <h3 className="col-6">Attack</h3>
                        <h3 className="col-6 text-end">45</h3>
                    </div>
                    <div className="row justify-content-evenly">
                        <h3 className="col-6">Defense</h3>
                        <h3 className="col-6 text-end">45</h3>
                    </div>
                    <div className="row justify-content-evenly">
                        <h3 className="col-6">Special-attack</h3>
                        <h3 className="col-6 text-end">45</h3>
                    </div>
                    <div className="row justify-content-evenly">
                        <h3 className="col-6">Special-defense</h3>
                        <h3 className="col-6 text-end">45</h3>
                    </div>
                    <div className="row justify-content-evenly">
                        <h3 className="col-6">Speed</h3>
                        <h3 className="col-6 text-end">45</h3>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
    <div className="d-flex justify-content-end mt-5">
        <NavLink to="/search/1">
             <button className="btn btn-back">Regresar</button>
        </NavLink>
    </div>
    </>
  )
}
