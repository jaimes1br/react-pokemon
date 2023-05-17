import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InitialStateConfig } from '../../shared/types';

const initialState: InitialStateConfig = {
  lang: 'es'
}

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    }
  }
})


export const { setLanguage } = configSlice.actions