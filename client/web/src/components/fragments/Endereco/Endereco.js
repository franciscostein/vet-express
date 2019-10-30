import React, { useEffect, useState, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';

import UF from '../../fragments/UnidadeFederativa/UnidadeFederativa';

const endereco = props => {
    const [endereco, setEndereco] = useState({
        cep: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: ''
    });

    useEffect(() => {
        if (props.value) {
            setEndereco({ ...props.value });
        }
    }, [props.value]);

    const handleChangeCEP = value => {
        setEndereco({ cep: value });
    }

    const handleChangeLogradouro = value => {
        setEndereco({ logradouro: value });
    }

    const handleChangeNumero = value => {
        setEndereco({ numero: value });
    }

    const handleChangeBairro = value => {
        setEndereco({ bairro: value });
    }

    const handleChangeCidade = value => {
        setEndereco({ cidade: value });
    }

    // const handleChangeEstado = value => {
    //     setEndereco({  });
    // }

    return (
        <Fragment>
            <h3 className={props.styles.row}>Endereço</h3>
            <div className={props.styles.row}>
                <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                    <TextField
                        id="inputCEP"
                        label="CEP"
                        margin="normal"
                        value={endereco.cep}
                        onChange={event => handleChangeCEP(event.target.value)}
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
                        value={endereco.logradouro}
                        onChange={event => handleChangeLogradouro(event.target.value)}
                    />
                </div>
                <div className={`${props.styles.col} ${props.styles.span1of5}`}>
                    <TextField
                        id="inputNumero"
                        label="Número"
                        margin="normal"
                        fullWidth
                        value={endereco.numero}
                        onChange={event => handleChangeNumero(event.target.value)}
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
                        value={endereco.bairro}
                        onChange={event => handleChangeBairro(event.target.value)}
                    />
                </div>
                <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                    <TextField
                        id="inputCidade"
                        label="Cidade"
                        margin="normal"
                        fullWidth
                        value={endereco.cidade}
                        onChange={event => handleChangeCidade(event.target.value)}
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