import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { BasicPokemon, InitialStatePokemon, PokemonDetail } from '../../shared/types';
import { pokemonFake } from '../../shared/constants';

const initialState: InitialStatePokemon = {
    isSaving: false,
    isLoading: false,
    allPokemons: [],
    favPokemons: [],
    currentPage: 1,
    pokemonDetail: pokemonFake,
    isError: false,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    clearPokemonState: ( state ) => {
      state.isSaving = false;
      state.isLoading = false;
      state.allPokemons = [];
      state.favPokemons = [];
      state.currentPage = 1;
      state.pokemonDetail = pokemonFake;
      state.isError =false;
    },
    isLoadingPokemons: ( state ) => {
      state.isLoading = true;
      state.isError = false;
    },
    setAllPokemons: (state, action: PayloadAction<BasicPokemon[]>) => {
      state.allPokemons = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
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
    setAddPokemonFav: (state, { payload }: PayloadAction<{pkms: number[], id: number}>) => {
      state.favPokemons = payload.pkms;
      state.allPokemons[payload.id - 1] = {...state.allPokemons[payload.id - 1], isFav: true};
      state.isSaving = false;  
    },
    setDeletePokemonFav: (state, { payload }: PayloadAction<{pkms: number[], id: number}>) => {
      state.favPokemons = payload.pkms;
      state.allPokemons[payload.id - 1] = {...state.allPokemons[payload.id - 1], isFav: false};
      state.isSaving = false;
    }
  }
})

export const { 
  clearPokemonState,
  isLoadingPokemons, 
  setAllPokemons, 
  setCurrentPage, 
  setDetailPokemon,
  setError,
  setIsSavingFav,
  setPokemonFav,
  setAddPokemonFav,
  setDeletePokemonFav  } =  pokemonSlice.actions;