import { Link } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useRegister } from "../../hooks/useRegister";

const formData = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export const RegisterPage = () => {

  const {
    errors,
    isValidForm,
    formSubmitted,
    handleInputChange,
    hanldeSubmit
  } = useRegister(formData)


  return (
    <>
      <AuthLayout title='Registro'>
        <form onSubmit={ hanldeSubmit } className="container">
          <div className='row row-form'>
            <div className="mb-3 col-6">
              <label className="form-label">Nombre completo</label>
              <input onChange={ handleInputChange } type="text" className="form-control" name="name"/>
              {(!isValidForm && formSubmitted && errors?.name) && <h6 className="mt-1 py-1 alert alert-danger">{errors?.name}</h6>}
            </div>
            <div className="mb-3 col-6">
              <label className="form-label">Correo electrónico</label>
              <input onChange={ handleInputChange } type="email" className="form-control" name="email"/>
              {(!isValidForm && formSubmitted && errors?.email) && <h6 className="mt-1 py-1 alert alert-danger">{errors?.email}</h6>}
            </div>
          </div>
          <div className="row row-form-passwords">
            <div className="mb-3 col-6">
                <label className="form-label">Contraseña</label>
                <input onChange={ handleInputChange } type="password" className="form-control" name="password"/>
                {(!isValidForm && formSubmitted && errors?.password) && <h6 className="mt-1 py-1 alert alert-danger">{errors?.password}</h6>}
            </div>
            <div className="mb-3 col-6">
                <label className="form-label">Confirmar contraseña</label>
                <input onChange={ handleInputChange } type="password" className="form-control" name="confirmPassword"/>
                {(!isValidForm && formSubmitted && errors?.confirmPassword) && <h6 className="mt-1 py-1 alert alert-danger">{errors?.confirmPassword}</h6>}
            </div>
          </div>
          <div className='d-flex align-items-center mt-4'>
            <button type="submit" className="btn btn-primary btn-back">Registrarse</button>
            <p className='me-3 mb-0 free-space text-end'>
                ¿Ya tienes cuenta?  
                <Link 
                    className="ms-1" 
                    to="/auth/login">
                    Ingresa
                </Link>
            </p>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
