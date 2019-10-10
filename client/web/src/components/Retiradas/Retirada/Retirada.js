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
                    <div className={`${props.styles.col} ${styles.span11of12}`}>
                        <SelectClinica />
                    </div>
                    <div className={`${props.styles.col} ${styles.span1of12}`}>
                        <Fab color="primary" size="small" aria-label="add" className={`${props.styles.floatRight} ${styles.marginTop}`}>
                            <AddIcon />
                        </Fab>
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
                        <IconButton
                            color="primary"
                            // className={classes.button}
                            aria-label="upload picture"
                            component="span"
                            edge="start"
                        >
                            <PhotoCamera />
                        </IconButton>
                    </label>
                </div>

                <FormButtons styles={props.styles} variant="inset" />
            </form>
        </Fragment>
    );
}

export default retiradas;