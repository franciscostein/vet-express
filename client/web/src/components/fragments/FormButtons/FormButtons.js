import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

import styles from './FormButtons.module.css';

const formButtons = props => {
    const history = useHistory();
    const [data, setData] = useState({});

    useEffect(() => {
        if (props.value) {
            setData({ ...props.value });
        }
    }, [props.value]);

    const salvarClickHandler = event => {
        // props.onClick(event);

        const authToken = Cookies.get('authToken');
        console.log(data);
        axios.post(props.path, 
            data,
            { headers: { 'Authorization': `Bearer ${authToken}` }
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

        // history.goBack();
    }

    const cancelarClickHandler = () => {
        history.goBack();
    }

    return (
        <Grid justify="center" spacing={2} container className={styles.buttons}>
            <Grid item>
                <Button 
                    variant="contained"
                    color="primary"
                    className={props.styles.primaryButton}
                    onClick={event => salvarClickHandler(event)}
                >Salvar</Button>
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    color="secondary"
                    className={props.styles.secondaryButton}
                    onClick={() => cancelarClickHandler()}
                >Cancelar</Button>
            </Grid>
        </Grid>
    );
}

export default formButtons;