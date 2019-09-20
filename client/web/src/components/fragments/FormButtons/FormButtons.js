import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import styles from './FormButtons.module.css';

const formButtons = props => {
    return (
        <Grid justify="center" spacing={2} container className={styles.buttons}>
            <Grid item>
                <Button 
                    variant="contained"
                    color="primary"
                    className={props.styles.primaryButton}
                >Salvar</Button>
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    color="secondary"
                    className={props.styles.secondaryButton}
                >Cancelar</Button>
            </Grid>
        </Grid>
    );
}

export default formButtons;