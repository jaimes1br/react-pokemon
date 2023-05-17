import { FormDataValid } from "../shared/types";

const REGS_EXP = {
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%^*?&_-])[A-Za-z\d#$@!%^*?&_-]{8,}$/,
    NAME: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
    EMAIL: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
}
  
export const validationsForm = (form: FormDataValid, isLogin: boolean = false) => {

    const errors = {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
    }

    let isValid = true;

    if( !REGS_EXP.EMAIL.test(form.email) ) {
        errors.email = 'ERROR_MESSAGE.INVALID_EMAIL';
        isValid = false;
    } 

    if( !REGS_EXP.PASSWORD.test(form.password) ){
        if(isLogin){
            errors.password = 'ERROR_MESSAGE.INVALID_PASSWORD';
        }else{
            errors.password = 'ERROR_MESSAGE.PASSWORD_CONTENT';
        }
        
        isValid = false;
    }

    if(!isLogin){
        if( !REGS_EXP.NAME.test(form.name || '') ){
            errors.name = 'ERROR_MESSAGE.INVALID_NAME';
            isValid = false;
        }
    
    
        if( !(REGS_EXP.PASSWORD.test(form.confirmPassword || '') && form.confirmPassword=== form.password) ){
            errors.confirmPassword = 'ERROR_MESSAGE.PASSWORD_DIFERENT'
            isValid = false;
        }
    }

    return { isValid, errors }
}