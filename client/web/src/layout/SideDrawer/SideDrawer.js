import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Retiradas from '@material-ui/icons/RestoreFromTrash';
import Clinica from '@material-ui/icons/Store';
import Motorista from '@material-ui/icons/SportsMotorsports';
import Usuario from '@material-ui/icons/AccountBox';
import Chat from '@material-ui/icons/ChatBubble';
import Email from '@material-ui/icons/Email';
import { Nav } from 'mui-layout';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    toolbar: theme.mixins.toolbar
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
    const classes = useStyles();

    return (
        <Nav
            renderIcon={collapsed =>
                collapsed ? <ChevronRight /> : <ChevronLeft />
            }
        >
            <div className={classes.root}>
                <div className={classes.toolbar} />
                <Divider />
                <List component="nav" aria-label="main mailbox folders">
                    
                    <ListItem button>
                        <ListItemIcon>
                            <Retiradas />
                        </ListItemIcon>
                        <ListItemText primary="Retiradas" />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <Clinica />
                        </ListItemIcon>
                        <ListItemText primary="Clínicas" />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <Motorista />
                        </ListItemIcon>
                        <ListItemText primary="Motoristas" />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <Usuario />
                        </ListItemIcon>
                        <ListItemText primary="Usuários" />
                    </ListItem>
                </List>
                <div className={classes.toolbar} />
                <Divider />
                <List component="nav" aria-label="secondary mailbox folders">

                    <ListItemLink href="#simple-list">
                        <ListItemIcon>
                            <Chat />
                        </ListItemIcon>
                        <ListItemText primary="Chat" />
                    </ListItemLink>

                    <ListItemLink href="#simple-list">
                        <ListItemIcon>
                            <Email />
                        </ListItemIcon>
                        <ListItemText primary="e-mail" />
                    </ListItemLink>
                </List>
            </div>
        </Nav>
  );
}