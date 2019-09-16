import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => createStyles({
    header: {
        backgroundColor: '#FFC107'
    },
}));

const Header = props => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            VetExpress
        </div>
    );
}

export default Header;