
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFounPage from './pages/404/NotFound';
import AboutPage from './pages/about/AboutPage';



function AppRoutingOne() {
    return (
        <div className="App">

            <aside>
                <div>

                </div>
            </aside>
            <main>
                <Router>
                    <Routes>
                        <Route exact path='/home' element={<HomePage />}></Route>
                        {/* Dos rutas que cargan el mismo componente */}
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                </Router>

            </main>
        </div>
    );
}

export default AppRoutingOne;
