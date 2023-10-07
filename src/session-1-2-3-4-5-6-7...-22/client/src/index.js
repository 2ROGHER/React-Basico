import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/**
 * Nota: Aqui es donde colocamos BOOTSTRAP para poder usarlo.
 */

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/scss/bootstrap'


import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutingFinal from './AppRoutingFinal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* <App /> */}
      <AppRoutingFinal/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
