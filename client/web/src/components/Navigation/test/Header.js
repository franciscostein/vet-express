import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


/*const useStyles = makeStyles(theme => ({
    header: {

    }
}));*/

const Header = props => {
    //const styles = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;