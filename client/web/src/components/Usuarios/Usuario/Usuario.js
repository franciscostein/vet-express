import React, { useState } from 'react';
import { TextField, FormControlLabel, Switch, Button } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';

import UF from '../../fragments/UnidadeFederativa/UnidadeFederativa';
import CategoriaCNH from '../../fragments/CategoriaCNH/CategoriaCNH';

import styles from './Usuario.module.css';

const usuario = props => {
    const [selectedDate, handleDateChange] = useState(new Date());
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
                                value={selectedDate}
                                onChange={date => handleDateChange(date)}
                                margin="normal"
                            />
                            {/* KeyboardButtonProps={{ 'arial-labe': 'change time', }} */}
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            <TextField
                                id="inputTelefone"
                                label="Telefone"
                                className={props.styles.floatRight}
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
                                margin="normal"
                                fullWidth
                            />
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            <KeyboardDatePicker
                                id="inputValidadeCNH"
                                label="Validade"
                                format="dd/MM/yyyy"
                                value={selectedDate}
                                onChange={date => handleDateChange(date)}
                                margin="normal"
                            />
                            {/* KeyboardButtonProps={{ 'arial-labe': 'change time', }} */}
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
                                margin="normal"
                            />
                        </div>
                    </div>
                    <div className={props.styles.row}>
                        <div className={`${props.styles.col} ${props.styles.span4of5}`}>
                            <TextField
                                id="inputLogradouro"
                                label="Logradouro"
                                margin="normal"
                                fullWidth
                            />
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of5}`}>
                            <TextField
                                id="inputNumero"
                                label="Número"
                                className={props.styles.floatRight}
                                margin="normal"
                            />
                        </div>
                    </div>
                    <div className={props.styles.row}>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            <TextField
                                id="inputBairro"
                                label="Bairro"
                                margin="normal"
                            />
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                            <TextField
                                id="inputCidade"
                                label="Cidade"
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
                            <TextField
                                id="inputEmail"
                                label="E-mail"
                                margin="normal"
                                required
                                fullWidth
                            />
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of2} ${styles.administrador}`}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        color="primary"
                                    />
                                }
                                label="Administrador"
                                className={props.styles.floatRight}
                            />
                        </div>
                    </div>
                    <div className={props.styles.row}>
                        <div className={`${props.styles.col} ${props.styles.span1of2}`}>
                            <TextField
                                id="inputSenha"
                                label="Senha"
                                type="password"
                                margin="normal"
                                fullWidth
                            />
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of2}`}>
                            <TextField
                                id="inputConfirmarSenha"
                                label="Confirme a senha"
                                type="password"
                                margin="normal"
                                fullWidth
                            />
                        </div>
                    </div>
                    
                    <div className={`${props.styles.row} ${styles.buttons}`}>
                        <div className={`${props.styles.col} ${props.styles.span1of2}`}>
                            <Button 
                                variant="contained"
                                color="primary"
                                className={`${props.styles.primaryButton} ${props.styles.floatRight}`}
                            >Salvar</Button>
                        </div>
                        <div className={`${props.styles.col} ${props.styles.span1of2}`}>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={props.styles.secondaryButton}
                            >Cancelar</Button>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

export default usuario;