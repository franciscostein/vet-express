import React from 'react';
import { TextField, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardDatePicker } from '@material-ui/pickers';

import Estado from '../../fragments/Estado/Estado';
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
}));

const usuario = props => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <h2>Usuário</h2>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="inputNome"
                    label="Nome"
                    className={classes.TextField}
                    margin="normal"
                    required
                    fullWidth
                />
                <KeyboardDatePicker
                    id="inputNascimento"
                    label="Nascimento"
                    format="dd/MM/yyyy"
                    margin="normal"
                    KeyboardButtonProps={{ 'arial-labe': 'change time', }}
                />
                <TextField
                    id="inputCPF"
                    label="CPF"
                    className={classes.TextField}
                    margin="normal"
                    required
                />
                <TextField
                    id="inputRG"
                    label="RG"
                    className={classes.TextField}
                    margin="normal"
                    required
                />
                <h4>CNH</h4>
                <TextField
                    id="inputNumeroCNH"
                    label="Número"
                    className={classes.TextField}
                    margin="normal"
                />
                <KeyboardDatePicker
                    id="inputValidadeCNH"
                    label="Validade"
                    format="dd/MM/yyyy"
                    margin="normal"
                    KeyboardButtonProps={{ 'arial-labe': 'change time', }}
                />
                <CategoriaCNH />
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
                <TextField
                    id="inputBairro"
                    label="Bairro"
                    className={classes.TextField}
                    margin="normal"
                />
                <TextField
                    id="inputCidade"
                    label="Cidade"
                    className={classes.TextField}
                    margin="normal"
                />
                <Estado classes={classes} />
            </form>
        </React.Fragment>
    );
};

export default usuario;
