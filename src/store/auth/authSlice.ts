import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InitialStateAuth } from '../../shared/types'

const IMAGE_DEFAULT = "https://i.pravatar.cc/150?u="

const initialState: InitialStateAuth = {
    status: 'checking', //'checking','not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkingCredentials: ( state ) => {
        state.status = 'checking'
    },
    login: (state, { payload }: PayloadAction<any>) => {
      state.status = 'authenticated', //'checking','not-authenticated', 'authenticated'
      state.uid = payload.uid,
      state.email = payload.email,
      state.displayName = payload.displayName,
      state.photoURL = payload.photoURL || `${IMAGE_DEFAULT}${payload.displayName.replace(' ','-')}`,
      state.errorMessage = null
    },
    logout: (state, { payload }: PayloadAction<any>) => {
      state.status = 'not-authenticated', //'checking','not-authenticated', 'authenticated'
      state.uid = null,
      state.email = null,
      state.displayName = null,
      state.photoURL = null,
      state.errorMessage = payload?.errorMessage
    },
  },
})


export const { checkingCredentials, login, logout} =  authSlice.actions;