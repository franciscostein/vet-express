import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

import styles from './FormButtons.module.css';

const formButtons = props => {
    const history = useHistory();

    const salvarClickHandler = () => {
        history.goBack();
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
                    onClick={() => salvarClickHandler()}
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