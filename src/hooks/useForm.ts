import { ChangeEvent, useEffect, useState } from "react";

export const useForm = ( initialForm: any = { }) => {
    
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