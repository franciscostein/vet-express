import React from 'react';
import { TextField, Divider, FormControlLabel, Switch, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardDatePicker } from '@material-ui/pickers';

import UF from '../../fragments/UnidadeFederativa/UnidadeFederativa';
import CategoriaCNH from '../../fragments/CategoriaCNH/CategoriaCNH';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    row: {
        maxWidth: '1140px',
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    col: {
        display: 'block',
        float: 'left',
        marginTop: '1%',
        marginRight: 0,
        marginBottom: '1%',
        marginLeft: '1.6%',
        firstChild: { 
            marginLeft: 0
        }
    },
    span1of3: {
        width: '32.26%'
    },
    span2of3: {
        width: '66.13%'
    },
    span3of3: {
        width: '100% !important'
    },
    h2: {
        fontSize: '180%',
        wordSpacing: '2px',
        textAlign: 'center',
        marginTop: '40px',
        marginBottom: '20px',
        letterSpacing: '1px',
    },
    h3: {
        fontSize: '110%',
        marginBottom: '15px'
    },
    clearfix: {
        zoom: 1,
        '&::after': {
            content: '.',
            clear: 'both',
            display: 'block',
            height: 0,
            visibility: 'hidden'
        }
    }
}));

const usuario = props => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={`${classes.row} ${classes.h2}`}>Usuário</div>
            <div className={classes.row}>
                <form className={classes.container} noValidate autoComplete="off">
                    <div className={classes.row}>
                        <div className={`${classes.col} ${classes.span3of3}`}>
                            <TextField
                                id="inputNome"
                                label="Nome"
                                className={classes.TextField}
                                margin="normal"
                                required
                            />
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={`${classes.col} ${classes.span1of3}`}>
                            <TextField
                                id="inputCPF"
                                label="CPF"
                                className={classes.TextField}
                                margin="normal"
                                required
                            />
                        </div>
                        <div className={`${classes.col} ${classes.span1of3}`}>
                            <TextField
                                id="inputTelefone"
                                label="Telefone"
                                className={classes.TextField}
                                margin="normal"
                            />    
                        </div>
                        {/*<div className={`${classes.col} ${classes.span1of3}`}>
                            <KeyboardDatePicker
                                id="inputNascimento"
                                label="Nascimento"
                                format="dd/MM/yyyy"
                                margin="normal"
                                KeyboardButtonProps={{ 'arial-labe': 'change time', }}
                            />
                        </div>*/}
                    </div>
                    
                    <div className={`${classes.row} ${classes.h3}`}>CNH</div>
                    <div className={classes.row}>
                        <div className={`${classes.col} ${classes.span1of3}`}>
                            <TextField
                                id="inputNumeroCNH"
                                label="Número"
                                className={classes.TextField}
                                margin="normal"
                            />
                        </div>
                        <div className={`${classes.col} ${classes.span1of3}`}>
                            <KeyboardDatePicker
                                id="inputValidadeCNH"
                                label="Validade"
                                format="dd/MM/yyyy"
                                margin="normal"
                                KeyboardButtonProps={{ 'arial-labe': 'change time', }}
                            />
                        </div>
                        <div className={`${classes.col} ${classes.span1of3}`}>
                            <CategoriaCNH />
                        </div>
                    </div>
                    
                    <div className={classes.divider} />
                    
                    <Divider />

                    <h3>Endereço</h3>
                    <TextField
                        id="inputCEP"
                        label="CEP"
                        className={classes.TextField}
                        margin="normal"
                    />
                    <TextField
                        id="inputLogradouro"
                        label="Logradouro"
                        className={classes.TextField}
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        id="inputNumero"
                        label="Número"
                        className={classes.TextField}
                        margin="normal"
                    />
                    <div className={classes.divider} />
                    <TextField
                        id="inputBairro"
                        label="Bairro"
                        className={classes.TextField}
                        margin="normal"
                    />
                    <div className={classes.divider} />
                    <TextField
                        id="inputCidade"
                        label="Cidade"
                        className={classes.TextField}
                        margin="normal"
                    />
                    <UF classes={classes} />
                    
                    <Divider />

                    <h3>Acesso</h3>
                    <TextField
                        id="inputEmail"
                        label="E-mail"
                        className={classes.TextField}
                        margin="normal"
                        required
                    />&nbsp;&nbsp;&nbsp;
                    <TextField
                        id="inputSenha"
                        label="Senha"
                        className={classes.TextField}
                        type="password"
                        margin="normal"
                    />
                    <div className={classes.divider} />
                    <FormControlLabel
                        control={
                            <Switch
                                color="primary"
                            />
                        }
                        label="Administrador"
                    />
                    <div className={classes.divider} />
                    <Button 
                        variant="contained"
                        color="primary"
                        className={classes.button}>Salvar</Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button
                        variant="contained"
                        className={classes.button}>Cancelar</Button>
                </form>
            </div>
        </React.Fragment>
    );
};

export default usuario;
