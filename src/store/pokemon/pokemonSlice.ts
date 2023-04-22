import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { BasicPokemon, InitialStatePokemon } from '../../shared/types';

const initialState: InitialStatePokemon = {
    isSaving: false,
    isLoading: false,
    allPokemons: [],
    favPokemons: [],
    currentPage: 1
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    isLoadingPokemons: ( state ) => {
      state.isLoading = true;
    },
    setAllPokemons: (state, action: PayloadAction<BasicPokemon[]>) => {
      state.allPokemons = action.payload;
      state.isLoading = false
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    }
  },
})

export const { setAllPokemons, isLoadingPokemons, setCurrentPage } =  pokemonSlice.actions;