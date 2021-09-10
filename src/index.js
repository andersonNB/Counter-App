import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PrimeraApp from './PrimeraApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>

    <PrimeraApp saludo="Texto desde las props"></PrimeraApp>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
