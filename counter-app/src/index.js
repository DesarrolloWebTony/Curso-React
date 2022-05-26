import React  from 'react';
import ReactDOM from 'react-dom/client';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';


import './index.css';


const divRoot = ReactDOM.createRoot(document.querySelector('#root'));

// divRoot.render(<PrimeraApp saludo='Hola padrinos!'/>);
divRoot.render(<CounterApp value={12}/>);

