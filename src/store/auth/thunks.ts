import { registerUserWithEmailPassword } from "../../firebase/provider"
import { RegisterUser } from "../../shared/types"
import { AppDispatch } from "../store"
import { checkingCredentials, login, logout } from "./authSlice"




export const checkingAuthentication = () => {
  return async( dispatch:AppDispatch ) => {

      dispatch( checkingCredentials() )
  }
}


export const startCreatingUserWithEmailPassword = ({ email, password, displayName }: RegisterUser) => {
  return async( dispatch:AppDispatch ) =>{
      
      dispatch( checkingCredentials() );
      const { ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({ email, password, displayName });

      if( !ok ) return dispatch( logout({ errorMessage }) );
      dispatch( login({ uid, displayName,email,photoURL}));
  }
}