import { FormDataValid } from "../shared/types";

const REGS_EXP = {
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%^*?&_-])[A-Za-z\d#$@!%^*?&_-]{8,}$/,
    NAME: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
    EMAIL: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
}
  
export const validationsForm = (form: FormDataValid) => {

    const errors = {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
    }

    let isValid = true;

    if( !REGS_EXP.EMAIL.test(form.email) ) {
        errors.email = 'Correo invalido';
        isValid = false;
    } 

    if( !REGS_EXP.PASSWORD.test(form.password) ){
        errors.password =  'La contraseña debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número, un carácter especial.';
        isValid = false;
    }

    if( !REGS_EXP.NAME.test(form.name || '') ){
        errors.name = 'Nombre invalido';
        isValid = false;
    }

    if( !(REGS_EXP.PASSWORD.test(form.confirmPassword|| '') && form.confirmPassword=== form.password) ){
        errors.confirmPassword = 'La contraseña no es igual'
        isValid = false;
    }

    return { isValid, errors }
}