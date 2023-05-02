import { AuthLayout } from '../layout/AuthLayout';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <AuthLayout title='Acceder'>
      <form>
        <div className='row'>
          <div className="mb-3 col-6">
            <label className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-6">
              <label className="form-label">Ingresa tu contraseña</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
        </div>
        <div className='d-flex align-items-center text-center mt-3'>
          <button type="submit" className="btn btn-primary btn-back">Ingresar</button>
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
