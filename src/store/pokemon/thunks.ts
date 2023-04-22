import { getAllPokemons } from '../../helpers';
import { isLoadingPokemons, setAllPokemons } from './pokemonSlice';
import { AppDispatch } from '../store';


export const startGetAllPokemons = () => {
    return async( dispatch: AppDispatch ) => {
        
        dispatch( isLoadingPokemons() );
        const allPokemons = await getAllPokemons();
        
        dispatch( setAllPokemons( allPokemons ));
    }
}