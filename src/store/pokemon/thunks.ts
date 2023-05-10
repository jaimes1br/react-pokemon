import { getAllPokemons } from '../../helpers';
import { isLoadingPokemons, setAddPokemonFav, setAllPokemons, setDeletePokemonFav, setDetailPokemon, setError, setIsSavingFav, setPokemonFav } from './pokemonSlice';
import { AppDispatch, RootState } from '../store';
import { getPokemonByIdOrName } from '../../helpers';
import { PokemonDetail, PokemonDetailApi } from '../../shared/types';
import { useAppSelector } from '../hooks';
import { doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { loadPokemonFav } from '../../helpers/loadPokemonFav';

export const startGetAllPokemons = ( uid: string ) => {
    return async( dispatch: AppDispatch ) => {
        
        const getPokemonPromises = [getAllPokemons(), loadPokemonFav( uid )];
        const [allPokemons, favPkms] = await Promise.all(getPokemonPromises);
    
        favPkms.forEach( (idPkm: number) => {
            allPokemons[idPkm - 1] = {...allPokemons[idPkm - 1], isFav: true }; 
        });

        dispatch( setAllPokemons( allPokemons ));
        dispatch( setPokemonFav( favPkms ));
    }
}

export const startGetPokemonByIdOrName = (search = '') => {
    return async( dispatch: AppDispatch,getState:any ) => {
        dispatch(isLoadingPokemons());
        
        setTimeout(async function(){
            try {
                const pokemonDetailApi: PokemonDetailApi = await getPokemonByIdOrName(search);
                const { favPokemons } = getState().pokemons
                const pokemonDetail = {
                    ...pokemonDetailApi, 
                    isFav: favPokemons.includes(pokemonDetailApi.id)
                }
                
                dispatch( setDetailPokemon( pokemonDetail ));
            
            } catch (error: any) {
                if(error.response){
                    dispatch( setError() );
                }
            }
        }, 500);    
        
    }
}

export const startAddFav = ( id: number) => {
    return async( dispatch: AppDispatch, getState:any) => {
        
        dispatch( setIsSavingFav() );
        const { uid } = getState().auth
        const { favPokemons } = getState().pokemons
        if( !uid ) throw new Error('El UID no existe');
        
        const newFav = [...favPokemons,id];

        const docRef = doc( FirebaseDB, `${uid}/info/favPkm/pokemons`);
        await setDoc(docRef,{pkms: newFav},{ merge: true });
        
        dispatch(setAddPokemonFav({pkms: newFav, id}))       
    }
}

export const startDeleteFav = ( id: number ) => {
    return async( dispatch: AppDispatch, getState:any) => {
        
        dispatch( setIsSavingFav() );
        const { uid } = getState().auth
        const { favPokemons } = getState().pokemons
        if( !uid ) throw new Error('El UID no existe');
        
        const newFav = favPokemons.filter(( idPkm:number ) => idPkm !== id );

        const docRef = doc( FirebaseDB, `${uid}/info/favPkm/pokemons`);
        await setDoc(docRef,{pkms: newFav},{ merge: true });
        
        dispatch(setDeletePokemonFav({pkms: newFav, id}));       
    }
}