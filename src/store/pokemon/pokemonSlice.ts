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
    }
  },
})

export const { 
  isLoadingPokemons, 
  setAllPokemons, 
  setCurrentPage, 
  setDetailPokemon,
  setError  } =  pokemonSlice.actions;