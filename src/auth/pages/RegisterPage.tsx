import { Link } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useRegister } from "../../hooks/useRegister";
import { useTranslation } from 'react-i18next';


const formData = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export const RegisterPage = () => {

  const [ t ] = useTranslation('global');

  const {
    errors,
    isValidForm,
    formSubmitted,
    handleInputChange,
    hanldeSubmit
  } = useRegister(formData);

  
  const holderName = t("REGISTER.INSERT_NAME");
  const holderEmail = t("LOGIN.INSERT_EMAIL");
  const holderPassword = t("LOGIN.INSERT_PASSWORD");
  const holderConfirmPassword = t("REGISTER.CONFIRM_PASSWORD");


  return (
    <>
      <AuthLayout title={t('LOGIN.REGISTER')}>
        <form onSubmit={ hanldeSubmit } className="container">
          <div className='row row-form'>
            <div className="mb-3 col-6">
              <label className="form-label">{t('REGISTER.NAME')}</label>
              <input onChange={ handleInputChange } type="text" className="form-control" name="name" placeholder={holderName}/>
              {(!isValidForm && formSubmitted && errors?.name) && <h6 className="mt-1 py-1 alert alert-danger">{t(errors?.name)}</h6>}
            </div>
            <div className="mb-3 col-6">
              <label className="form-label">{t('LOGIN.INSERT_EMAIL')}</label>
              <input onChange={ handleInputChange } type="email" className="form-control" name="email" placeholder={holderEmail}/>
              {(!isValidForm && formSubmitted && errors?.email) && <h6 className="mt-1 py-1 alert alert-danger">{t(errors?.email)}</h6>}
            </div>
          </div>
          <div className="row row-form-passwords">
            <div className="mb-3 col-6">
                <label className="form-label">{t('REGISTER.PASSWORD')}</label>
                <input onChange={ handleInputChange } type="password" className="form-control" name="password" placeholder={holderPassword}/>
                {(!isValidForm && formSubmitted && errors?.password) && <h6 className="mt-1 py-1 alert alert-danger">{t(errors?.password)}</h6>}
            </div>
            <div className="mb-3 col-6">
                <label className="form-label">{t('REGISTER.CONFIRM_PASSWORD')}</label>
                <input onChange={ handleInputChange } type="password" className="form-control" name="confirmPassword" placeholder={holderConfirmPassword}/>
                {(!isValidForm && formSubmitted && errors?.confirmPassword) && <h6 className="mt-1 py-1 alert alert-danger">{t(errors?.confirmPassword)}</h6>}
            </div>
          </div>
          <div className='d-flex align-items-center mt-4'>
            <button type="submit" className="btn btn-primary btn-back">{t('LOGIN.REGISTER')}</button>
            <p className='me-3 mb-0 free-space text-end'>
                {t('REGISTER.HAVE_ACCOUNT')}
                <Link 
                    className="ms-1" 
                    to="/auth/login">
                    {t('LOGIN.LOGIN')}
                </Link>
            </p>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
