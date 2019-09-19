import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { Header } from 'mui-layout';
import makeStyles from '@material-ui/styles/makeStyles';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import MenuRounded from '@material-ui/icons/MenuRounded';

import styles from './HeaderBar.module.css';

const useHeaderStyles = makeStyles(({ palette }) => ({
    header: {
        backgroundColor: '#8BC34A'
    },
    icon: {
        color: '#fff'
    }
}));

const HeaderBar = props => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    function handleMenu(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    const {
        icon: iconCss,
        header: headerCss
    } = useHeaderStyles();

    return (
        <Header
            classes={{ root: headerCss }}
            renderMenuIcon={open => (open ? <ChevronLeft className={iconCss} /> : <MenuRounded classes={{ root: iconCss }} />)}
        >
            <Grid
                justify="space-between"
                container 
                spacing={24}
            >
                <Grid item>
                    <Grid justify="flex-start" container>
                        <Grid item>
                            <img src={`${process.env.PUBLIC_URL}/flask64.svg`} alt="logo"></img>
                        </Grid>
                        <Grid item>
                            <div className={styles.title}>
                                Vet Express
                            </div>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <div className={styles.icons}>
                                <MenuItem onClick={handleClose}><PersonOutlineIcon />&nbsp; Perfil</MenuItem>
                                <MenuItem onClick={handleClose}><ExitToAppIcon />&nbsp; Sair</MenuItem>
                            </div>
                        </Menu>
                    </div>
                </Grid>
            </Grid>
        </Header>
    );
}

export default HeaderBar;