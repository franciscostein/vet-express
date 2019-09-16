import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import MenuRounded from '@material-ui/icons/MenuRounded';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import CustomHeader from './components/Navigation/test/Header';
import Usuario from './components/Usuarios/Usuario/Usuario';
 
import {
    Root,
    Header,
    Nav,
    Content,
    Footer,
    presets,
} from 'mui-layout';
import { green, lightGreen, red, deepOrange } from '@material-ui/core/colors';
 
const baseTheme = createMuiTheme({ 
    palette: {
        primary: deepOrange
    }
}); // or use your own theme;

const config = presets.createStandardLayout({ navVariant: 'temporary', autoCollapsedDisabled: true, headerPosition: 'sticky' });
 
const App = () => (
    <ThemeProvider theme={baseTheme}>
        <Root config={config}>
            <Header
                renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
            >
                <CustomHeader />
            </Header>
            <Nav
                renderIcon={collapsed =>
                collapsed ? <ChevronRight /> : <ChevronLeft />
            }
            >
                nav
            </Nav>
            <React.Fragment>
                <Content>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Usuario />
                    </MuiPickersUtilsProvider>
                </Content>
            </React.Fragment>
            <Footer>
                footer
            </Footer>
        </Root>
    </ThemeProvider>
)
 
export default App;