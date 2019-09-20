import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import lightGreen from '@material-ui/core/colors/lightGreen';
import { Root, Content, presets } from 'mui-layout';

import Header from './layout/HeaderBar/HeaderBar';
import SideDrawer from './layout/SideDrawer/SideDrawer';
import Footer from './layout/Footer/Footer';

import Login from './components/Login/Login';
import Retiradas from './components/Retiradas/Retiradas';
// import Clinica from './components/Clinicas/Clinica/Clinica';
// import Usuario from './components/Usuarios/Usuario/Usuario';

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

// Development only
const auth = true;
 
const App = () => {
    return (
        <ThemeProvider theme={baseTheme}>
            { !auth ? <Login styles={globalStyles} /> :
                <Root config={config}>
                    <Header />
                    <SideDrawer />
                    <Content className={globalStyles.content}>
                        <Retiradas styles={globalStyles} />
                        {/* <Clinica styles={globalStyles} /> */}
                        {/* <Usuario styles={globalStyles} /> */}
                    </Content>
                    <Footer styles={globalStyles} />
                </Root>
            }
        </ThemeProvider>
    );
}
 
export default App;