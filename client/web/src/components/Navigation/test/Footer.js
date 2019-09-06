import React, { Fragment } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Divider from '@material-ui/core/Divider';
//import { makeStyles } from '@material-ui/core/styles';

/*const useStyle = makeStyles(theme => ({
    footer: {
    }
}));*/

const Footer = props => {
    //const classes = useStyle();

    return (
        <Fragment>
            <Divider />
            <BottomNavigation />
        </Fragment>
    );
}

export default Footer;