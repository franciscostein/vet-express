import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'; // normalize.css equilavent from Material-UI
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Container from '@material-ui/core/Container';

import DateFnsUtils from '@date-io/date-fns';
import './App.css';

// import Login from './components/Login/Login';
import Usuario from './components/Usuarios/Usuario/Usuario';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
//import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';

class App extends Component {
    render() {
        return (
            <div>
                <CssBaseline />
                <Toolbar />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Container maxWidth="sm">
                        <Usuario />
                    </Container>
                </MuiPickersUtilsProvider>
            </div>
        );
    }
}

export default App;
