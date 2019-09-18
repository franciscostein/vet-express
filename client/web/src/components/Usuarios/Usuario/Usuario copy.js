import React from 'react';
import { TextField, FormControlLabel, Switch, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardDatePicker } from '@material-ui/pickers';

import UF from '../../fragments/UnidadeFederativa/UnidadeFederativa';
import CategoriaCNH from '../../fragments/CategoriaCNH/CategoriaCNH';

import styles from './Usuario.module.css';

const useStyles = makeStyles(theme => ({}));

const usuario = props => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <h2 className={props.styles.row}>Usuário</h2>
            <div className={props.styles.row}>
                <form noValidate autoComplete="off">
                    <div className={props.styles.row}>
                        <div className={`${props.styles.col} ${props.styles.span3of3}`}>
                            <TextField
                                id="inputNome"
                                label="Nome"
                                className={classes.TextField}
                                margin="normal"
                                required
                                fullWidth
                            />
                        </div>
                    </div>
                    <div className={`${props.styles.row} ${props.styles.clearfix}`}>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            <TextField
                                id="inputCPF"
                                label="CPF"
                                className={classes.TextField}
                                margin="normal"
                                required
                                fullWidth
                            />
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            <KeyboardDatePicker
                                id="inputNascimento"
                                label="Nascimento"
                                format="dd/MM/yyyy"
                                margin="normal"
                                KeyboardButtonProps={{ 'arial-labe': 'change time', }}
                            />
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            <TextField
                                id="inputTelefone"
                                label="Telefone"
                                className={`${classes.TextField} ${props.styles.floatRight}`}
                                margin="normal"
                                fullWidth
                            />    
                        </div>
                    </div>

                    <h3 className={props.styles.row}>CNH</h3>
                    <div className={props.styles.row}>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            <TextField
                                id="inputNumeroCNH"
                                label="Número"
                                className={classes.TextField}
                                margin="normal"
                                fullWidth
                            />
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            <KeyboardDatePicker
                                id="inputValidadeCNH"
                                label="Validade"
                                format="dd/MM/yyyy"
                                margin="normal"
                                KeyboardButtonProps={{ 'arial-labe': 'change time', }}
                            />
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of3} ${styles.select}`}>
                            <CategoriaCNH />
                        </div>
                    </div>

                    <h3 className={props.styles.row}>Endereço</h3>
                    <div className={props.styles.row}>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            <TextField
                                id="inputCEP"
                                label="CEP"
                                className={classes.TextField}
                                margin="normal"
                            />
                        </div>
                    </div>
                    <div className={props.styles.row}>
                        <div className={`${props.styles.col} ${props.styles.span4of5}`}>
                            <TextField
                                id="inputLogradouro"
                                label="Logradouro"
                                className={classes.TextField}
                                margin="normal"
                                fullWidth
                            />
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of5}`}>
                            <TextField
                                id="inputNumero"
                                label="Número"
                                className={`${classes.TextField} ${props.styles.floatRight}`}
                                margin="normal"
                            />
                        </div>
                    </div>
                    <div className={props.styles.row}>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            <TextField
                                id="inputBairro"
                                label="Bairro"
                                className={classes.TextField}
                                margin="normal"
                            />
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            <TextField
                                id="inputCidade"
                                label="Cidade"
                                className={classes.TextField}
                                margin="normal"
                            />
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of3} ${styles.select}`}>
                            <UF />
                        </div>
                    </div>

                    <h3 className={props.styles.row}>Acesso</h3>
                    <div className={props.styles.row}>
                        <div className={`${props.styles.col} ${props.styles.span1of2}`}>
                            <div className={props.styles.row}>
                                <div className={`${props.styles.col} ${props.styles.span2of2}`}>
                                    <TextField
                                        id="inputEmail"
                                        label="E-mail"
                                        className={classes.TextField}
                                        margin="normal"
                                        required
                                        fullWidth
                                    />
                                </div>
                            </div>
                            <div className={props.styles.row}>
                                <div className={`${props.styles.row}`}>
                                    <div className={`${props.styles.col} ${props.styles.span2of2}`}>
                                        <TextField
                                            id="inputSenha"
                                            label="Senha"
                                            className={classes.TextField}
                                            type="password"
                                            margin="normal"
                                            fullWidth
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of2}`}>
                            <div className={`${props.styles.col} ${props.styles.span2of2} ${styles.administrador}`}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            color="primary"
                                        />
                                    }
                                    label="Administrador"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className={`${props.styles.row} ${styles.buttons}`}>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            &nbsp;
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            <div className={`${props.styles.col} ${props.styles.span1of2}`}>
                                <Button 
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                >Salvar</Button>
                            </div>
                            <div className={`${props.styles.col} ${props.styles.span1of2}`}>
                                <Button
                                    variant="contained"
                                    className={classes.button}
                                >Cancelar</Button>
                            </div>
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            &nbsp;
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

export default usuario;
