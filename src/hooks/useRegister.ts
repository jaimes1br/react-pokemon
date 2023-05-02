import { useState, FormEvent } from 'react';
import { FormDataValid } from '../shared/types';
import { useForm } from './useForm';
import { validationsForm } from '../helpers';
import { useAppDispatch } from '../store/hooks';
import { startCreatingUserWithEmailPassword } from '../store/auth/thunks';


export const useRegister = (formData: any) => {

    const dispatch = useAppDispatch();
    const [ formSubmitted, setFormSubmitted] = useState(false);
    const [ isValidForm, setIsValidForm ] = useState(false);
    const [ errors, setErrors ] = useState<FormDataValid>();
  
    const { formState, handleInputChange } = useForm(formData);
  
    const hanldeSubmit = (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      const { isValid, errors } = validationsForm(formState);
  
      setFormSubmitted(true);
      setIsValidForm(isValid);
      setErrors(errors);
  
      if(!isValid) return

      const { email, password, name:displayName } = formState;
      dispatch( startCreatingUserWithEmailPassword({ email, password, displayName }));
    }

    return {
        errors,
        isValidForm,
        formSubmitted,
        handleInputChange,
        hanldeSubmit
    }
    

}