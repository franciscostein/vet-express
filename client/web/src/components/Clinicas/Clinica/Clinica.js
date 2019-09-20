import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';

import Endereco from '../../fragments/Endereco/Endereco';
import FormButtons from '../../fragments/FormButtons/FormButtons';

const clinica = props => {
    return (
        <Fragment>
            <h2 className={props.styles.row}>Clínica</h2>
            <form noValidate autoComplete="off">
                <div className={props.styles.row}>
                    <div className={`${props.styles.col} ${props.styles.span2of2}`}>
                        <TextField
                            id="inputFantasia"
                            label="Nome fantasia"
                            margin="normal"
                            required
                            fullWidth
                        />
                    </div>
                </div>
                <div className={props.styles.row}>
                    <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                        <TextField
                            id="inputCNPJ"
                            label="CNPJ"
                            margin="normal"
                            required
                            fullWidth
                        />
                    </div>
                    <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                        <TextField
                            id="inputTelefone"
                            label="Telefone"
                            margin="normal"
                            fullWidth
                        />  
                    </div>
                    <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                        <TextField
                            id="inputContato"
                            label="Contato"
                            margin="normal"
                            required
                            fullWidth
                        />
                    </div>
                </div>
                <Endereco styles={props.styles} />

                <FormButtons styles={props.styles} />
            </form>
        </Fragment>
    );
}

export default clinica;