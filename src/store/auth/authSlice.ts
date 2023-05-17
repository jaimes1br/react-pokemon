import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InitialStateAuth } from '../../shared/types'

const IMAGE_DEFAULT = "https://i.pravatar.cc/150?u="

const initialState: InitialStateAuth = {
    displayName: null,
    email: null,
    errorMessage: null,
    photoURL: null,
    status: 'checking', //'checking','not-authenticated', 'authenticated'
    uid: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkingCredentials: ( state ) => {
        state.status = 'checking';
    },
    login: (state, { payload }: PayloadAction<any>) => {
      state.displayName = payload.displayName;
      state.email = payload.email;
      state.errorMessage = null;
      state.photoURL = payload.photoURL || `${IMAGE_DEFAULT}${payload.displayName.replace(' ','-')}`;
      state.status = 'authenticated'; //'checking','not-authenticated', 'authenticated'
      state.uid = payload.uid;
    },
    logout: (state, { payload }: PayloadAction<any>) => {
      state.displayName = null;
      state.email = null;
      state.errorMessage = payload?.errorMessage;
      state.photoURL = null;
      state.status = 'not-authenticated'; //'checking','not-authenticated', 'authenticated'
      state.uid = null;
    },
  },
})


export const { checkingCredentials, login, logout} =  authSlice.actions;