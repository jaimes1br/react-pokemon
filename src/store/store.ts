import { configureStore  } from '@reduxjs/toolkit';
import { pokemonSlice } from './pokemon/pokemonSlice';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
    reducer: {
        pokemons: pokemonSlice.reducer,
        auth: authSlice.reducer,

        
    },
});

export type RootState = ReturnType< typeof store.getState>
export type AppDispatch = typeof store.dispatch
