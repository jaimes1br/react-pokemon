import { useState, FormEvent } from 'react';
import { useForm } from "./useForm";
import { validationsForm } from "../helpers";
import { FormDataValid } from "../shared/types";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../store/auth/thunks";
import { useAppDispatch } from "../store/hooks";

export const useLogin = (formData: any) => {
    
    const dispatch = useAppDispatch();
    const [ formSubmitted, setFormSubmitted] = useState(false);
    const [ isValidForm, setIsValidForm ] = useState(false);
    const [ errors, setErrors ] = useState<FormDataValid>();
   
    const { formState, handleInputChange } = useForm(formData);
    
    const hanldeSubmit = (evt: FormEvent<HTMLFormElement>) => {
 
        evt.preventDefault();
      const { isValid, errors } = validationsForm(formState,true);
      setFormSubmitted(true);
      setIsValidForm(isValid);
      setErrors(errors);
  
      if(!isValid) return
      
      dispatch( startLoginWithEmailPassword({ ...formState }) );      
    }

    const onGoogleSignIn = () => {
        dispatch( startGoogleSignIn() ) 
    }


    return {
        errors,
        isValidForm,
        formSubmitted,
        handleInputChange,
        hanldeSubmit,
        onGoogleSignIn
    }
}