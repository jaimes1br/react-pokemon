import { ChangeEvent, useEffect, useState } from "react";

interface SearchPokemon {
    searchpkm?: string
}

export const useForm = ( initialForm: SearchPokemon = { }) => {
    
    const [ formState, setFormState ] = useState (initialForm);

    useEffect(() => {
        setFormState( initialForm );
    },[initialForm]);

    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }
    
    const handleReset = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        handleInputChange,
        handleReset
    }
}