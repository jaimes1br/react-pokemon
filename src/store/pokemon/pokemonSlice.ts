import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { BasicPokemon, InitialStatePokemon, PokemonDetail, PokemonDetailFake } from '../../shared/types';

const pokemonFake: PokemonDetailFake = {
  id: -1,
  imageUrl: '',
  name: '',
  stats: [],
  types: [],
}

const initialState: InitialStatePokemon = {
    isSaving: false,
    isLoading: false,
    allPokemons: [],
    favPokemons: [],
    currentPage: 1,
    pokemonDetail: pokemonFake
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
    },
    setDetailPokemon: (state, action: PayloadAction<PokemonDetail>) => {
      state.pokemonDetail = action.payload;
      state.isLoading = false
    }
  },
})

export const { 
  isLoadingPokemons, 
  setAllPokemons, 
  setCurrentPage, 
  setDetailPokemon  } =  pokemonSlice.actions;