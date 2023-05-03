import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { startGetAllPokemons } from "../store/pokemon/thunks";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";

export const useCheckAuth = () => {
    const { status } = useAppSelector( state => state.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        onAuthStateChanged( FirebaseAuth, async( user ) => {
            if( !user) return  dispatch( logout({ errorMessage: ''}));
            const { uid, email, displayName, photoURL } = user
            dispatch( login({ uid, email, displayName, photoURL }));
            dispatch( startGetAllPokemons());
        })
    }, [])

    return {
        status
    }
  
}