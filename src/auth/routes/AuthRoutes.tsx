import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';
import { LanguageBar, NavBarAuth } from '../../shared';

export const AuthRoutes = () => {
  return (
    <>
      <NavBarAuth/>
      <LanguageBar/>
      <div className="container">
        <Routes>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='register' element={<RegisterPage/>}/>

            <Route path='/*' element={ <Navigate to='/auth/login'/> }/>
        </Routes>
      </div>
    </>
  )
}
