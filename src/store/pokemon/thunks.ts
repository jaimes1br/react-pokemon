import { AnyAction } from '@reduxjs/toolkit';
import { getAllPokemons } from '../../helpers';
import { setAllPokemons } from './pokemonSlice';
import { AppDispatch } from '../store';


export const startGetAllPokemons = () => {
    return async( dispatch: AppDispatch ) => {

        const allPokemons = await getAllPokemons();
        dispatch( setAllPokemons( allPokemons ));
    }
}