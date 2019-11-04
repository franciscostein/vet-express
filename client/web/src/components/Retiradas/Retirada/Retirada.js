import React, { useEffect, useState, Fragment } from 'react';
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Fab from '@material-ui/core/Fab';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import { KeyboardDatePicker } from '@material-ui/pickers';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';

import SelectClinica from '../../fragments/SelectClinica/SelectClinica';
import SelectMotorista from '../../fragments/SelectMotorista/SelectMotorista';
import FormButtons from '../../fragments/FormButtons/FormButtons';

import styles from './Retirada.module.css';

const useStyles = makeStyles(() => ({
    input: {
        display: 'none'
    }
}));

const retiradas = props => {
    const classes = useStyles();
    const history = useHistory();
    const { id } = useParams();
    const authToken = Cookies.get('authToken');
    const { administrator } = Cookies.getJSON('user');
    const [clinica, setClinica] = useState({
        _id: '',
        nome: ''
    });
    const [motorista, setMotorista] = useState({
        _id: '',
        nome: ''
    });
    const [observacao, setObservacao] = useState('');
    const [dataRetirada, setDataRetirada] = useState(new Date());
    const [concluido, setConcluido] = useState({ checkedConcluido: false });

    useEffect(() => {
        if (id) {
            axios.get(`/pickUps/${id}`, {
                headers: { 'Authorization': `Bearer ${authToken}` }
            })
            .then(response => {
                const { data } = response;

                setClinica({ _id: data._id, nome: data.clinic.name });
                setMotorista({ _id: data._id, nome: data.driver.user.name });
                setObservacao(data.note);
                setDataRetirada(formatDateFromAPI(data.date));
                setConcluido({ ...concluido, checkedConcluido: data.done });
            })
            .catch(error => {
                console.log(error);
            });
        }
    }, []);

    const formatDateFromAPI = date => {
        const dateArray = date.split('-');
        const day = dateArray[2].substring(0, 2);
        const month = dateArray[1];
        const year = dateArray[0];
        return `${month}/${day}/${year}`;
    }

    const novaClinicaClickHandler = () => {
        history.push('/clinica');
    }

    const novoMotoristaClickHandler = () => {
        history.push('/motorista');
    }

    const handleChangeConcluido = name => event => {
        setConcluido({ ...concluido, [name]: event.target.checked });
    }

    return (
        <Fragment>
            <h2 className={props.styles.row}>Retirada</h2>
            <form noValidate autoComplete="off">
                <div className={`${props.styles.row} ${styles.spaceBetweenSelects}`}>
                    <div className={`${props.styles.col} ${props.styles.span11of12}`}>
                        <SelectClinica
                            disabled={!administrator}
                            value={clinica}
                            onChange={(clinicId, clinicName) => setClinica({ _id: clinicId, nome: clinicName })}
                        />
                    </div>
                    <div className={`${props.styles.col} ${props.styles.span1of12}`}>
                        <Tooltip title="Nova clínica">
                            <Fab
                                className={`${props.styles.floatRight} ${props.styles.fabMarginTop}`} 
                                color="primary" 
                                size="small"
                                disabled={!administrator}
                                onClick={() => novaClinicaClickHandler()}
                            >
                                <AddIcon />
                            </Fab>
                        </Tooltip>
                    </div>
                </div>
                <div className={props.styles.row}>
                    <div className={`${props.styles.col} ${props.styles.span11of12}`}>
                        <SelectMotorista
                            disabled={!administrator}
                            value={motorista}
                            onChange={(driverId, driverName) => setMotorista({ _id: driverId, nome: driverName })}
                        />
                    </div>
                    <div className={`${props.styles.col} ${props.styles.span1of12}`}>
                        <Tooltip title="Novo motorista">
                            <Fab
                                className={`${props.styles.floatRight} ${props.styles.fabMarginTop}`} 
                                color="primary" 
                                size="small"
                                disabled={!administrator}
                                onClick={() => novoMotoristaClickHandler()}
                            >
                                <AddIcon />
                            </Fab>
                        </Tooltip>
                    </div>
                </div>
                <div className={props.styles.row}>
                    <div className={`${props.styles.col} ${props.styles.span2of2}`}>
                        <TextField
                            id="inputObs"
                            label="Observação"
                            margin="normal"
                            multiline
                            fullWidth
                            value={observacao}
                            onChange={event => setObservacao(event.target.value)}
                        />
                    </div>
                </div>
                <div className={props.styles.row}>
                    <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                        <KeyboardDatePicker
                            id="inputData"
                            label="Data"
                            format="dd/MM/yyyy"
                            autoOk
                            disabled={!administrator}
                            value={dataRetirada}
                            onChange={date => setDataRetirada(date)}
                            margin="normal"
                        />
                    </div>
                    <div className={`${props.styles.col} ${props.styles.span1of3}`}>

                    </div>
                    <div className={`${props.styles.col} ${props.styles.span1of3} ${props.styles.switch}`}>
                        <FormControlLabel
                            control={
                                <Switch
                                    color="primary"
                                    checked={concluido.checkedConcluido}
                                    onChange={handleChangeConcluido('checkedConcluido')}
                                    value="checkedConcluido"
                                />
                            }
                            label="Concluído"
                            className={props.styles.floatRight}
                        />
                    </div>
                </div>

                <div className={`${props.styles.row} ${styles.photoButton}`}>
                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file">
                        <Tooltip title="Adicionar imagem da colheta">
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                                edge="start"
                            >
                                <PhotoCamera />
                            </IconButton>
                        </Tooltip>
                    </label>
                </div>
                <div className={props.styles.row}>
                    <Paper elevation="1" className={styles.img}>
                        {/* <img src={require('../../../static/img/doggo.jpg')} alt="Doggo"/> */}
                    </Paper>
                </div>

                <FormButtons 
                    styles={props.styles}
                    path='/pickUps'
                    id={id}
                    data={{
                        clinic: clinica._id,
                        driver: motorista._id,
                        date: dataRetirada,
                        note: observacao,
                        done: concluido.checkedConcluido,
                        photo: ''
                    }}
                />
            </form>
        </Fragment>
    );
}

export default retiradas;