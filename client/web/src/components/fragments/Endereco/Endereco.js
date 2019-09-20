import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';

import UF from '../../fragments/UnidadeFederativa/UnidadeFederativa';

const endereco = props => {
    return (
        <Fragment>
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
                        margin="normal"
                        fullWidth
                    />
                </div>
            </div>
            <div className={props.styles.row}>
                <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                    <TextField
                        id="inputBairro"
                        label="Bairro"
                        margin="normal"
                        fullWidth
                    />
                </div>
                <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                    <TextField
                        id="inputCidade"
                        label="Cidade"
                        margin="normal"
                        fullWidth
                    />
                </div>
                <div className={`${props.styles.col} ${props.styles.span1of3} ${props.styles.select}`}>
                    <UF />
                </div>
            </div>
        </Fragment>
    );
}

export default endereco;