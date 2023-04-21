import { createSlice, PayloadAction} from '@reduxjs/toolkit'

interface BasicPokemon {
  name: string
  url: string
}

interface InitialState {
    isSaving: boolean,
    isLoading: boolean,
    allPokemons: BasicPokemon[],
    favPokemons: any[]
}

const initialState: InitialState = {
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