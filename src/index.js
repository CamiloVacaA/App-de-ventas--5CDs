import React from 'react';
import ReactDOM from 'react-dom';

// Estilos

import './styles/main.css';
import './styles/login.css';
import './styles/optionsMenu.css'

// Componentes

import App from './App';
import { GlobalState } from './components/globalState';

    




ReactDOM.render( 
    <React.StrictMode>
        <GlobalState>
            <App />
        </GlobalState>
    </React.StrictMode>,
  document.getElementById('root')
);
