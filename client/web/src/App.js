import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import MenuRounded from '@material-ui/icons/MenuRounded';

import { lightGreen } from '@material-ui/core/colors';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import CustomHeader from './components/Navigation/test/Header';
import Usuario from './components/Usuarios/Usuario/Usuario';

import styles from './App.module.css';
import genericStyles from './Generic.module.css';
 
import {
    Root,
    Header,
    Nav,
    Content,
    Footer,
    presets,
} from 'mui-layout';

const baseTheme = createMuiTheme({ 
    palette: {
        primary: lightGreen,
        secondary: {
            main: '#f3f3f3'
        }
    }
});

const useHeaderStyles = makeStyles(({ palette }) => ({
    header: {
        backgroundColor: '#8BC34A'
    },
    icon: {
        color: '#fff'
    }
}));

const config = presets.createStandardLayout({ navVariant: 'temporary', autoCollapsedDisabled: true, headerPosition: 'sticky' });
 
const App = () => {
    const {
        icon: iconCss,
        header: headerCss
    } = useHeaderStyles();

    return (
        <ThemeProvider theme={baseTheme}>
            <Root config={config}>
                <Header
                    classes={{ root: headerCss }}
                    renderMenuIcon={open => (open ? <ChevronLeft className={iconCss} /> : <MenuRounded classes={{ root: iconCss }} />)}
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
                <Content>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Usuario styles={genericStyles} />
                    </MuiPickersUtilsProvider>
                </Content>
                <div className={styles.footer}>
                    <Footer>
                        Vet Express &copy; 2019.
                    </Footer>
                </div>
            </Root>
        </ThemeProvider>
    );
}
 
export default App;