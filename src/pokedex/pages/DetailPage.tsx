import { Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PokemonDatail } from '../components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { startGetPokemonByIdOrName } from '../../store/pokemon/thunks';
import { Loader, NotFoundPokemon } from '../../shared/components';

export const DetailPage = () => {

    const dispatch = useAppDispatch();
    const params = useParams();
    const { id: toSearch = ''} = params
    const { isLoading, pokemonDetail, isError } = useAppSelector( state => state.pokemons );
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
                (isLoading && isFakePokemon) && <Loader/> 
            }
            {
                (!isLoading && !isFakePokemon) && <PokemonDatail pokemon={ pokemonDetail }/>
            }
            {   
                isError && <NotFoundPokemon pokemon={ toSearch }/>
            }
        </>
    )
}
