import React, { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
// import InputMask from 'react-input-mask';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { KeyboardDatePicker } from '@material-ui/pickers';

import CategoriaCNH from '../../fragments/CategoriaCNH/CategoriaCNH';
import Endereco from '../../fragments/Endereco/Endereco';
import FormButtons from '../../fragments/FormButtons/FormButtons';

const usuario = props => {
    const [selectedDate, handleDateChange] = useState(new Date());
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [numeroCNH, setNumeroCNH] = useState('');
    const [email, setEmail] = useState('');
    
    useEffect(() => {
        if (id) {
            const authToken = Cookies.get('authToken');
            console.log(authToken);
            axios.get(`/users/${id}`, {
                headers: { 'Authorization': `Bearer ${authToken}` }
            })
            .then(response => {
                const { data } = response;
                setNome(data.name);
                setCpf(data.cpf);
                setTelefone(data.phone);
                setNumeroCNH(data.cnh.number);
                setEmail(data.email);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }, []);

    const handleChangeNome = value => {
        setNome(value);
    }

    const handleChangeCpf = value => {
        setCpf(value);
    }

    const handleChangeTelefone = value => {
        setTelefone(value);
    }

    const handleChangeNumeroCNH = value => {
        setNumeroCNH(value);
    }

    const handleChangeEmail = value => {
        setEmail(value);
    }

    return (
        <Fragment>
            <h2 className={props.styles.row}>Usuário</h2>
            <form noValidate autoComplete="off">
                <div className={props.styles.row}>
                    <div className={`${props.styles.col} ${props.styles.span3of3}`}>
                        <TextField
                            id="inputNome"
                            label="Nome"
                            margin="normal"
                            required
                            fullWidth
                            value={nome}
                            onChange={event => handleChangeNome(event.target.value)}
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
                            value={cpf}
                            onChange={event => handleChangeCpf(event.target.value)}
                            inputProps={{
                                maxlength: 11
                            }}
                        >
                            {/* <InputMask mask="999.999.999-99" maskChar=" " /> */}
                        </TextField>
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
                    </div>
                    <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                        <TextField
                            id="inputTelefone"
                            label="Telefone"
                            className={props.styles.floatRight}
                            margin="normal"
                            fullWidth
                            value={telefone}
                            onChange={event => handleChangeTelefone(event.target.value)}
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
                            value={numeroCNH}
                            onChange={event => handleChangeNumeroCNH(event.target.value)}
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
                    </div>
                    <div className={`${props.styles.col} ${props.styles.span1of3} ${props.styles.select}`}>
                        <CategoriaCNH />
                    </div>
                </div>

                <Endereco styles={props.styles} />

                <h3 className={props.styles.row}>Acesso</h3>
                <div className={props.styles.row}>
                    <div className={`${props.styles.col} ${props.styles.span1of2}`}>
                        <TextField
                            id="inputEmail"
                            label="E-mail"
                            margin="normal"
                            required
                            fullWidth
                            value={email}
                            onChange={event => handleChangeEmail(event.target.value)}
                        />
                    </div>
                    <div className={`${props.styles.col} ${props.styles.span1of2} ${props.styles.switch}`}>
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
                
                <FormButtons styles={props.styles} />
            </form>
        </Fragment>
    );
}

export default usuario;