import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import NotFound from '../src/pages/404/NotFound';

const AppRoutingFinal = () => {
    const navigate = useNavigate();
    
    //TODO:  change to value from the session storage.
    let loggedIn = false;

    return (
        <Routes>
            {/* Redirecciones para proteger las rutas. */}
            <Route path='/' exact >
                {
                    // TODO: verificar el uso de `redireccion` con la nueva versino de react-router-dom
                    loggedIn ?
                        () => { navigate('/dashboard') }
                        :
                        () => { navigate('/login') }
                }
            </Route>
            <Route exact path='/login' element={<LoginPage />} />
            <Route exact path='/dashboard'  >
                {
                    loggedIn ?
                        <DashboardPage />
                        :
                        () => { navigate('/login') }
                }
            </Route>
            <Route path='/not-found' element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutingFinal;
