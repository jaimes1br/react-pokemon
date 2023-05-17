import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { BasicPokemon, InitialStatePokemon, PokemonDetail } from '../../shared/types';
import { pokemonFake } from '../../shared/constants';

const initialState: InitialStatePokemon = {
    allPokemons: [],
    currentPage: 1,
    favPokemons: [],
    isError: false,
    isLoading: false,
    isSaving: false,
    pokemonDetail: pokemonFake,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    clearPokemonState: ( state ) => {
      state.allPokemons = [];
      state.currentPage = 1;
      state.favPokemons = [];
      state.isError =false;
      state.isLoading = false;
      state.isSaving = false;
      state.pokemonDetail = pokemonFake;
    },
    isLoadingPokemons: ( state ) => {
      state.isError = false;
      state.isLoading = true;
    },
    setAddPokemonFav: (state, { payload }: PayloadAction<{pkms: number[], id: number}>) => {
      state.allPokemons[payload.id - 1] = {...state.allPokemons[payload.id - 1], isFav: true};
      state.favPokemons = payload.pkms;
      state.isSaving = false;  
    },
    setAllPokemons: (state, action: PayloadAction<BasicPokemon[]>) => {
      state.allPokemons = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setDeletePokemonFav: (state, { payload }: PayloadAction<{pkms: number[], id: number}>) => {
      state.allPokemons[payload.id - 1] = {...state.allPokemons[payload.id - 1], isFav: false};
      state.favPokemons = payload.pkms;
      state.isSaving = false;
    },
    setDetailPokemon: (state, action: PayloadAction<PokemonDetail>) => {
      state.pokemonDetail = action.payload;
      state.isLoading = false;
      state.isError = false
    },
    setError: (state ) => {
      state.isError = true;
      state.isLoading = false;
    },
    setIsSavingFav: ( state ) => {
      state.isSaving = true;
    },
    setPokemonFav: ( state, { payload }:  PayloadAction<number[]> ) => {
      state.favPokemons = payload;
      payload.forEach( id => {
        state.allPokemons[id - 1] = {...state.allPokemons[id - 1], isFav: true};
      })
      state.isSaving=false;
    },
  }
})

export const { 
  clearPokemonState,
  isLoadingPokemons, 
  setAddPokemonFav,
  setAllPokemons, 
  setCurrentPage, 
  setDeletePokemonFav,  
  setDetailPokemon,
  setError,
  setIsSavingFav,
  setPokemonFav
} =  pokemonSlice.actions;