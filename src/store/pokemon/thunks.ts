import { getAllPokemons } from '../../helpers';
import { isLoadingPokemons, setAllPokemons, setDetailPokemon, setError } from './pokemonSlice';
import { AppDispatch } from '../store';
import { getPokemonByIdOrName } from '../../helpers';
import { PokemonDetail } from '../../shared/types';

export const startGetAllPokemons = () => {
    return async( dispatch: AppDispatch ) => {
        
        // dispatch( isLoadingPokemons() );
        const allPokemons = await getAllPokemons();
        
        dispatch( setAllPokemons( allPokemons ));
    }
}

export const startGetPokemonByIdOrName = (search = '') => {
    return async( dispatch: AppDispatch ) => {
        dispatch(isLoadingPokemons());
        
        setTimeout(async function(){
            try {
                const pokemonDetail: PokemonDetail = await getPokemonByIdOrName(search);
                dispatch( setDetailPokemon( pokemonDetail ));
            
            } catch (error: any) {
                if(error.response){
                    dispatch( setError() );
                }
            }
        }, 500);    
        
    }
}
