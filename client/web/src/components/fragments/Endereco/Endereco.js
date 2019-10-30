import React, { useEffect, useState, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';

import UF from '../../fragments/UnidadeFederativa/UnidadeFederativa';

const endereco = props => {
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    useEffect(() => {
        if (props.value) {
            const { cep, logradouro, numero, bairro, cidade, estado } = props.value;
            setCep(cep);
            setLogradouro(logradouro);
            setNumero(numero);
            setBairro(bairro);
            setCidade(cidade);
            setEstado(estado);
        }
    }, [props.value]);

    return (
        <Fragment>
            <h3 className={props.styles.row}>Endereço</h3>
            <div className={props.styles.row}>
                <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                    <TextField
                        id="inputCEP"
                        label="CEP"
                        margin="normal"
                        value={cep}
                        onChange={event => setCep(event.target.value)}
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
                        value={logradouro}
                        onChange={event => setLogradouro(event.target.value)}
                    />
                </div>
                <div className={`${props.styles.col} ${props.styles.span1of5}`}>
                    <TextField
                        id="inputNumero"
                        label="Número"
                        margin="normal"
                        fullWidth
                        value={numero}
                        onChange={event => setNumero(event.target.value)}
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
                        value={bairro}
                        onChange={event => setBairro(event.target.value)}
                    />
                </div>
                <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                    <TextField
                        id="inputCidade"
                        label="Cidade"
                        margin="normal"
                        fullWidth
                        value={cidade}
                        onChange={event => setCidade(event.target.value)}
                    />
                </div>
                <div className={`${props.styles.col} ${props.styles.span1of3} ${props.styles.select}`}>
                    <UF value={estado} onChange={value => setEstado(value)} />
                </div>
            </div>
        </Fragment>
    );
}

export default endereco;