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
    const { id } = useParams();
    const { administrator } = Cookies.getJSON('user');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [nascimento, setNascimento] = useState(new Date());
    const [telefone, setTelefone] = useState('');
    const [numeroCNH, setNumeroCNH] = useState('');
    const [validadeCNH, setValidadeCNH] = useState(new Date());
    const [categoriasCNH, setCategoriasCNH] = useState([]);
    const [endereco, setEndereco] = useState({
        cep: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: ''
    });
    const [email, setEmail] = useState('');
    const [admin, setAdmin] = useState({ checkedAdmin: false });
    
    useEffect(() => {
        if (id) {
            const authToken = Cookies.get('authToken');

            axios.get(`/users/${id}`, {
                headers: { 'Authorization': `Bearer ${authToken}` }
            })
            .then(response => {
                const { data } = response;
                setNome(data.name);
                setCpf(data.cpf);
                setNascimento(formatDate(data.birthday));
                setTelefone(data.phone);
                setNumeroCNH(data.cnh.number);
                setValidadeCNH(formatDate(data.cnh.expiringDate));
                setCategoriasCNH(data.cnh.category);
                handleChangeEndereco(data.address);
                setEmail(data.email);
                setAdmin({ ...admin, checkedAdmin: data.administrator });
            })
            .catch(error => {
                console.log(error);
            });
        }
    }, []);

    const formatDate = date => {
        const dateArray = date.split('-');
        const day = dateArray[2].substring(0, 2);
        const month = dateArray[1];
        const year = dateArray[0];
        return `${month}/${day}/${year}`;
    }

    const handleChangeEndereco = address => {
        const { zipCode, street, number, neighborhood, city, state } = address;
        setEndereco({ cep: zipCode, logradouro: street, numero: number, bairro: neighborhood, cidade: city, estado: state });
    }

    const handleChangeAdmin = name => event => {
        setAdmin({ ...admin, [name]: event.target.checked });
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
                            onChange={event => setNome(event.target.value)}
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
                            disabled={!administrator}
                            value={cpf}
                            onChange={event => setCpf(event.target.value)}
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
                            value={nascimento}
                            onChange={date => setNascimento(date)}
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
                            onChange={event => setTelefone(event.target.value)}
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
                            disabled={!administrator}
                            fullWidth
                            value={numeroCNH}
                            onChange={event => setNumeroCNH(event.target.value)}
                        />
                    </div>
                    <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                        <KeyboardDatePicker
                            id="inputValidadeCNH"
                            label="Válido até"
                            format="dd/MM/yyyy"
                            value={validadeCNH}
                            onChange={date => setValidadeCNH(date)}
                            margin="normal"
                        />
                    </div>
                    <div className={`${props.styles.col} ${props.styles.span1of3} ${props.styles.select}`}>
                        <CategoriaCNH value={categoriasCNH} onChange={value => setCategoriasCNH(value)} />
                    </div>
                </div>

                <Endereco styles={props.styles} value={endereco} onChange={value => setEndereco(value)} />

                <h3 className={props.styles.row}>Acesso</h3>
                <div className={props.styles.row}>
                    <div className={`${props.styles.col} ${props.styles.span1of2}`}>
                        <TextField
                            id="inputEmail"
                            label="E-mail"
                            margin="normal"
                            disabled={!administrator}
                            required
                            fullWidth
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                    </div>
                    <div className={`${props.styles.col} ${props.styles.span1of2} ${props.styles.switch}`}>
                        <FormControlLabel
                            control={
                                <Switch
                                    color="primary"
                                    disabled={!administrator}
                                    checked={admin.checkedAdmin}
                                    onChange={handleChangeAdmin('checkedAdmin')}
                                    value="checkedAdmin"
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