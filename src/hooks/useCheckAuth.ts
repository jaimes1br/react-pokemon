import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { startGetAllPokemons } from "../store/pokemon/thunks";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";
import { setLanguage } from "../store/config/configSlice";
import { useTranslation } from 'react-i18next';

export const useCheckAuth = () => {
    const { status } = useAppSelector( state => state.auth);       
    const dispatch = useAppDispatch();
    const [ t,i18n ] = useTranslation('global');

    useEffect(() => {
        onAuthStateChanged( FirebaseAuth, async( user ) => {
            if( !user) return  dispatch( logout({ errorMessage: ''}));
            const { uid, email, displayName, photoURL } = user
            dispatch( login({ uid, email, displayName, photoURL }));
            dispatch( startGetAllPokemons(uid));
        })
    }, []);

    useEffect(() => {
        const lang = localStorage.getItem('lang');
        if(!!lang){
            dispatch(setLanguage(lang));
        }else{
            localStorage.setItem('lang','en');
            dispatch(setLanguage('en'));
        }
    },[])

    return {
        status
    }
  
}