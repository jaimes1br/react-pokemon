import { configureStore  } from '@reduxjs/toolkit';
import { pokemonSlice } from './pokemon/pokemonSlice';
import { authSlice } from './auth/authSlice';
import { configSlice } from './config/configSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        config: configSlice.reducer,
        pokemons: pokemonSlice.reducer,
        
    },
});

export type RootState = ReturnType< typeof store.getState>
export type AppDispatch = typeof store.dispatch
