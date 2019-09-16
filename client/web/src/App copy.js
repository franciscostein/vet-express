import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'; // normalize.css equilavent from Material-UI
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Container, Grid } from '@material-ui/core';

import DateFnsUtils from '@date-io/date-fns';
import './App.css';

// import Login from './components/Login/Login';
import Usuario from './components/Usuarios/Usuario/Usuario';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
//import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import Main from './components/Navigation/test/Main';
import Header from './components/Navigation/test/Header';
import Footer from './components/Navigation/test/Footer';

import PageTest from './components/Navigation/test/PageTest';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Main />    
                <Footer />   
                 
                <Toolbar />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Container maxWidth="sm">
                        <Usuario />
                    </Container>
                </MuiPickersUtilsProvider>
            </Fragment>
        );
    }
}

export default App;