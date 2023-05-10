import { useEffect, useMemo, useState } from "react";
import { BasicPokemon, PokemonDetail, PokemonDetailFake } from "../shared/types"
import { pipePokemonName } from "../helpers";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { startAddFav, startDeleteFav } from "../store/pokemon/thunks";

interface Props {
    pokemon: BasicPokemon | PokemonDetail | PokemonDetailFake,
    isDetail?: boolean
}
export const useFavorite = ({ pokemon }: Props ) => {

    const dispatch = useAppDispatch();
    const { favPokemons } = useAppSelector(state => state.pokemons);
    const [ isFav, setIsFav ] = useState<boolean>(pokemon.isFav);
    
    
    const name = useMemo(() => {
        return pipePokemonName(pokemon.name);
    },[pokemon.name]);

    const handleFavorite = () => {
        setIsFav(!isFav);
    }

    useEffect(() => {   

        if(isFav && favPokemons.indexOf(pokemon.id) === -1 ){
            dispatch( startAddFav(pokemon.id));
        }else if(!isFav && favPokemons.indexOf(pokemon.id) >= 0){
            dispatch( startDeleteFav( pokemon.id ));
        }        
    }, [ isFav ]);


    useEffect(() => {
        setIsFav(pokemon.isFav);
        
    },[pokemon]);
    
    return {
        name,
        isFav,
        handleFavorite
    }

}