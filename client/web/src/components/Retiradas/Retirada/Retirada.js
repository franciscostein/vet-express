import React, { useState, Fragment } from 'react';
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
import FormButtons from '../../fragments/FormButtons/FormButtons';

import styles from './Retirada.module.css';

const useStyles = makeStyles(() => ({
    input: {
        display: 'none'
    }
}));

const retiradas = props => {
    const classes = useStyles();
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <Fragment>
            <h2 className={props.styles.row}>Retirada</h2>
            <form noValidate autoComplete="off">
                <div className={props.styles.row}>
                    <div className={`${props.styles.col} ${props.styles.span11of12}`}>
                        <SelectClinica />
                    </div>
                    <div className={`${props.styles.col} ${props.styles.span1of12}`}>
                        <Tooltip title="Nova clínica">
                            <Fab color="primary" size="small" className={`${props.styles.floatRight} ${props.styles.fabMarginTop}`}>
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
                        />
                    </div>
                </div>
                <div className={props.styles.row}>
                    <div className={`${props.styles.col} ${props.styles.span1of3}`}>
                        <KeyboardDatePicker
                            id="inputData"
                            label="Data"
                            format="dd/MM/yyyy"
                            value={selectedDate}
                            onChange={date => handleDateChange(date)}
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

                <FormButtons styles={props.styles} />
            </form>
        </Fragment>
    );
}

export default retiradas;