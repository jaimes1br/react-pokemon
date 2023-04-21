import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { BasicPokemon, InitialStatePokemon } from '../../shared/types/types';

const initialState: InitialStatePokemon = {
    isSaving: false,
    isLoading: false,
    allPokemons: [],
    favPokemons: []
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setAllPokemons: (state, action: PayloadAction<BasicPokemon[]>) => {
        state.allPokemons = action.payload;
    },
  },
})


export const { setAllPokemons } =  pokemonSlice.actions;