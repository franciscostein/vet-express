import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'; // normalize.css equilavent from Material-UI

import './App.css';

// import Login from './components/Login/Login';
import Usuario from './components/Usuarios/Usuario/Usuario';

class App extends Component {
    render() {
        return (
            <div>
                <CssBaseline /> 
                <Usuario />
            </div>
        );
    }
}

export default App;
