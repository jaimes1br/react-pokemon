import { useEffect } from "react";
import { AppDispatch } from '../store/store';
import { useAppDispatch } from "../store/hooks";
import { startGetAllPokemons } from "../store/pokemon/thunks";

export const useCheckAuth = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
    
        dispatch( startGetAllPokemons());
    }, [])
  
}