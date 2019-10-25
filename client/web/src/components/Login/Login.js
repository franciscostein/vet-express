import React, { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import styles from './Login.module.css';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        width: 60,
        height: 60,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignIn = props => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = value => {
        setEmail(value);
    }

    const handleChangePassword = value => {
        setPassword(value);
    }

    const doLogin = () => {
        axios.post('/users/login', {
            email,
            password
        })
        .then(response => {
            Cookies.set('authToken', response.data.token);
            Cookies.set('user', response.data.user);

            props.history.push("/");
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        });
    }
    
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <img src={`${process.env.PUBLIC_URL}/flask64.svg`} alt="logo"></img>
                </Avatar>
                <Typography component="h1" variant="h5" color="textSecondary">
                    Vet Express
                </Typography>
                <div className={classes.form}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={event => handleChangeEmail(event.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={event => handleChangePassword(event.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={`${props.styles.primaryButton} ${styles.button}`}
                        onClick={() => doLogin()}
                    >
                        Entrar
                    </Button>
                </div>
            </div>
        </Container>
    );
}

export default withRouter(SignIn);