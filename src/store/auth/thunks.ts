import { loginWithEmailPassword, logoutFirebase,
         registerUserWithEmailPassword, singInWithGoogle,
         } from "../../firebase/provider"
import { LoginUser, RegisterUser } from "../../shared/types"
import { clearPokemonState } from "../pokemon/pokemonSlice"
import { AppDispatch } from "../store"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = () => {
  return async( dispatch:AppDispatch ) => {

      dispatch( checkingCredentials() )
  }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }: RegisterUser) => {
  return async( dispatch: AppDispatch ) =>{
      
      dispatch( checkingCredentials() );
      const { ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({ email, password, displayName });

      if( !ok ) return dispatch( logout({ errorMessage }) );
      dispatch( login({ uid, displayName,email,photoURL}));
  }
}

export const startLoginWithEmailPassword = ({ email, password }: LoginUser) => {
  return async( dispatch: AppDispatch ) => {

      dispatch( checkingCredentials());
      const { ok, uid, photoURL, displayName, errorMessage} = await loginWithEmailPassword({ email, password });
  
      if( !ok ) return dispatch( logout({ errorMessage }) );
      dispatch( login({ uid, displayName, email, photoURL}));
  }
}

export const startGoogleSignIn = () => {
  return async( dispatch: AppDispatch ) => {

      dispatch( checkingCredentials() );
      const result = await singInWithGoogle();
      const { errorMessage } = result
      if( !result.ok ) return dispatch( logout({ errorMessage }) );

      dispatch( login( result ));
  }
}

export const startLogout = () => {
  return async( dispatch: AppDispatch ) => {
      await logoutFirebase();
      dispatch( clearPokemonState());
      dispatch( logout({ errorMessage: ''}) );
  }
}