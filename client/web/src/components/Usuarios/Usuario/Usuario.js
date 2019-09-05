import React from 'react';
import { TextField, Divider, FormControlLabel, Switch } from '@material-ui/core';
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
                <TextField
                    id="inputCPF"
                    label="CPF"
                    className={classes.TextField}
                    margin="normal"
                    required
                />
                <div className={classes.divider} />
                <TextField
                    id="inputRG"
                    label="RG"
                    className={classes.TextField}
                    margin="normal"
                    required
                />
                <div className={classes.divider} />
                <TextField
                    id="inputMae"
                    label="Nome da mãe"
                    className={classes.TextField}
                    margin="normal"
                    fullWidth
                />
                <div className={classes.divider} />
                <TextField
                    id="inputPai"
                    label="Nome do pai"
                    className={classes.TextField}
                    margin="normal"
                    fullWidth
                />
                <div className={classes.divider} />
                <KeyboardDatePicker
                    id="inputNascimento"
                    label="Nascimento"
                    format="dd/MM/yyyy"
                    margin="normal"
                    KeyboardButtonProps={{ 'arial-labe': 'change time', }}
                />
                
                <h4>CNH</h4>
                <TextField
                    id="inputNumeroCNH"
                    label="Número"
                    className={classes.TextField}
                    margin="normal"
                />
                <div className={classes.divider} />
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

                <h3>Telefone</h3>
                <TextField
                    id="inputTelefoneResidencial"
                    label="Residencial"
                    className={classes.TextField}
                    margin="normal"
                />
                <h4>Celular</h4>
                <TextField
                    id="inputCelularPessoal"
                    label="Pessoal"
                    className={classes.TextField}
                    margin="normal"
                />
                <TextField
                    id="inputCelularProfissional"
                    label="Profissional"
                    className={classes.TextField}
                    margin="normal"
                />

                <Divider />

                <h3>Acesso</h3>
                <TextField
                    id="inputEmail"
                    label="E-mail"
                    className={classes.TextField}
                    margin="normal"
                    required
                />
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
            </form>
        </React.Fragment>
    );
};

export default usuario;
