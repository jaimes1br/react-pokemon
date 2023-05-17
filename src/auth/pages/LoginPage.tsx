import { AuthLayout } from '../layout/AuthLayout';
import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/uselogin';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const [ t ] = useTranslation('global');

  const {
    errors,
    isValidForm,
    formSubmitted,
    handleInputChange,
    hanldeSubmit,
    onGoogleSignIn
  } = useLogin( formData ); 
 
  const holderEmail = t("LOGIN.INSERT_EMAIL");
  const holderPassword = t("LOGIN.INSERT_PASSWORD");

  return (
    <AuthLayout title={t("LOGIN.LOGIN")}>
      <form onSubmit={ hanldeSubmit } className='container'>
        <div className='row row-form'>
          <div className="mb-3 col-6">
            <label className="form-label">{t('LOGIN.EMAIL')}</label>
            <input onChange={ handleInputChange } type="email" 
              className="form-control" name='email' placeholder={holderEmail}/>
            {(!isValidForm && formSubmitted && errors?.email) && <h6 className="mt-1 py-1 alert alert-danger">{t(errors?.email)}</h6>}
          </div>
        </div>
        <div className="row row-form">
          <div className="mb-3 col-6">
              <label className="form-label">{t('LOGIN.INSERT_PASSWORD')}</label>
              <input onChange={ handleInputChange } type="password" 
                className="form-control" name='password' placeholder={holderPassword}/>
                {(!isValidForm && formSubmitted && errors?.password) && <h6 className="mt-1 py-1 alert alert-danger">{t(errors?.password)}</h6>}
          </div>
        </div>
        <div className='d-flex align-items-center text-center mt-3'>
          <button type="submit" className="btn btn-primary btn-back">{t('LOGIN.LOGIN')}</button>
          <button onClick={ onGoogleSignIn } type="button" className="btn btn-primary btn-back ms-3">
            <img className='google-icon  p-0 me-1' src="/assets/fill-google-logo.svg" alt="Google Icon" />
            {t('LOGIN.GOOGLE')}
          </button>
        </div>
        <div className='d-flex justify-content-end align-items-start mt-3'>
          <p className=''>
            {t('LOGIN.NEW_HERE')}  
               <Link 
                  className="ms-1" 
                  to="/auth/register">
                  {t('LOGIN.CREATE_ACCOUNT')}
              </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  )
}
