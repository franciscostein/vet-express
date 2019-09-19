import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import lightGreen from '@material-ui/core/colors/lightGreen';
import { Root, Content, presets } from 'mui-layout';

import Header from './layout/HeaderBar/HeaderBar';
import SideDrawer from './layout/SideDrawer/SideDrawer';
import Footer from './layout/Footer/Footer';
import Usuario from './components/Usuarios/Usuario/Usuario';

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
 
const App = () => {
    return (
        <ThemeProvider theme={baseTheme}>
            <Root config={config}>
                <Header />
                <SideDrawer />
                <Content>
                    <Usuario styles={globalStyles} />
                </Content>
                <Footer />
            </Root>
        </ThemeProvider>
    );
}
 
export default App;