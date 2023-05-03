import { useState, FormEvent } from 'react';
import { AuthLayout } from '../layout/AuthLayout';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks';
import { useAppDispatch } from '../../store/hooks';
import { FormDataValid } from '../../shared/types';
import { validationsForm } from '../../helpers';
import { useLogin } from '../../hooks/uselogin';

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const {
    errors,
    isValidForm,
    formSubmitted,
    handleInputChange,
    hanldeSubmit,
    onGoogleSignIn
  } = useLogin( formData ); 
 
  return (
    <AuthLayout title='Acceder'>
      <form onSubmit={ hanldeSubmit } className='container'>
        <div className='row row-form'>
          <div className="mb-3 col-6">
            <label className="form-label">Correo electrónico</label>
            <input onChange={ handleInputChange } type="email" 
              className="form-control" name='email'/>
            {(!isValidForm && formSubmitted && errors?.email) && <h6 className="mt-1 py-1 alert alert-danger">{errors?.email}</h6>}
          </div>
        </div>
        <div className="row row-form">
          <div className="mb-3 col-6">
              <label className="form-label">Ingresa tu contraseña</label>
              <input onChange={ handleInputChange } type="password" 
                className="form-control" name='password'/>
                {(!isValidForm && formSubmitted && errors?.password) && <h6 className="mt-1 py-1 alert alert-danger">{errors?.password}</h6>}
          </div>
        </div>
        <div className='d-flex align-items-center text-center mt-3'>
          <button type="submit" className="btn btn-primary btn-back">Ingresar</button>
          <button onClick={ onGoogleSignIn } type="button" className="btn btn-primary btn-back ms-3">
            <img className='google-icon  p-0 me-1' src="/assets/fill-google-logo.svg" alt="Google Icon" />
            Google
          </button>
          <p className='ms-5 mb-0'>
              ¿No tienes cuenta?  
               <Link 
                  className="ms-1" 
                  to="/auth/register">
                  Registrate
              </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  )
}
