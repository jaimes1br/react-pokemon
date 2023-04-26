import { Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PokemonDatail } from '../components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { startGetPokemonByIdOrName } from '../../store/pokemon/thunks';
import { PokemonDetailFake } from '../../shared/types';
import { Loader } from '../../shared/components/Loader';

const pokemonFake: PokemonDetailFake = {
    id: -1,
    imageUrl: '',
    name: '',
    stats: {
        'special-attack': -1,
        'special-defense': -1,
        attack: -1,
        defense: -1,
        hp: -1,
        speed: -1
    },
    types: [],
}


export const DetailPage = () => {

    const dispatch = useAppDispatch();
    const params = useParams();
    const { id: toSearch = ''} = params
    const { isLoading, pokemonDetail } = useAppSelector( state => state.pokemons );
    const [ isFakePokemon, setIsFakePokemon ] = useState(true);

    useEffect(() => {
        dispatch( startGetPokemonByIdOrName(toSearch) );
    },[]);

    useEffect(() => {
        if(pokemonDetail.id !== -1)
            setIsFakePokemon(false);
    },[ pokemonDetail ])
    

    if( !toSearch ){
        <Navigate to='/search'/>
    }
    
    return (
        <>
            {
                (isLoading || isFakePokemon)
                    ? <Loader/>
                    : <PokemonDatail pokemon={ pokemonDetail }/>
            }
        </>
    )
}
