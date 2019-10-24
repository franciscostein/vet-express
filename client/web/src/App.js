import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import lightGreen from '@material-ui/core/colors/lightGreen';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Root, Content, presets } from 'mui-layout';

import Header from './layout/HeaderBar/HeaderBar';
import SideDrawer from './layout/SideDrawer/SideDrawer';
import Footer from './layout/Footer/Footer';

import Login from './components/Login/Login';
// import Retiradas from './components/Retiradas/Retiradas';
// import Retirada from './components/Retiradas/Retirada/Retirada';
// import Clinicas from './components/Clinicas/Clinicas';
// import Clinica from './components/Clinicas/Clinica/Clinica';
// import Usuarios from './components/Usuarios/Usuarios';
import Usuario from './components/Usuarios/Usuario/Usuario';
// import Motoristas from './components/Motoristas/Motoristas';
// import Motorista from './components/Motoristas/Motorista/Motorista';

import globalStyles from './Global.module.css';

const baseTheme = createMuiTheme({ 
    palette: {
        primary: lightGreen,
        secondary: {
            main: '#f3f3f3'
        }
    }
});

const config = presets.createStandardLayout({ navVariant: 'temporary', autoCollapsedDisabled: true, headerPosition: 'sticky' });

// Auth token
const auth = Cookies.get('vtxpToken');
 
const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={baseTheme}>
                {auth === undefined ? <Login styles={globalStyles} /> :
                    <Root config={config}>
                        <Header />
                        <SideDrawer />
                        <Content className={globalStyles.content}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                {/* <Retirada styles={globalStyles} /> */}
                                {/* <Retiradas styles={globalStyles} /> */}
                                {/* <Clinicas styles={globalStyles} /> */}
                                {/* <Clinica styles={globalStyles} /> */}
                                {/* <Usuarios styles={globalStyles} /> */}
                                <Usuario styles={globalStyles} />
                                {/* <Motoristas styles={globalStyles} /> */}
                                {/* <Motorista styles={globalStyles} /> */}
                            </MuiPickersUtilsProvider>
                        </Content>
                        <Footer styles={globalStyles} />
                    </Root>
                }
            </ThemeProvider>
        </BrowserRouter>
    );
}
 
export default App;