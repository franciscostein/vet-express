import React, { Fragment } from 'react';
import Cookies from 'js-cookie';
import MUIDataTable from 'mui-datatables';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import LinearProgress from '@material-ui/core/LinearProgress';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import options from '../fragments/TableOptions/Options';

import styles from './Retiradas.module.css';

const columns = [ 'Clínica', 'Data', 'Observação', 'Motorista' ];

const data = [
    [ 'VETPAT LAB. DE ANALISE VETERINARIA - SP  COD-4981*', '20/09/2019', '', 'Jevan Stout' ],
    [ 'ANIMAL CENTER - CAMPINAS', '20/09/2019', '', 'Jevan Stout' ],
    [ 'DIAGPET - CAMPINAS', '20/09/2019', '', 'Jevan Stout' ],
    [ 'LABORATORIO CDVE - CAMPINAS', '20/09/2019', '.', 'Jevan Stout' ],
    [ 'SCAN SAUDE E CIENCIA ANIMAL-CAMPINAS- COD.7961*', '20/09/2019', 'retirada de material', 'Jevan Stout' ],
    [ 'AMAZOO CLINLAB COD.3349 *', '20/09/2019', 'retirada de material', 'Thelma Ahmed' ],
    [ 'CLINICA VETERINARIA MUNDO PET - VINHEDO 13334', '20/09/2019', '2 formulario raiva', 'Nayan Morgan' ]
];

const useStyles = makeStyles(() => ({
    input: {
        display: 'none'
    }
}));

// DEV only
const loading = true;
  
const retiradas = props => {
    const classes = useStyles();
    const user = Cookies.getJSON('user');

    return (
        <form className={props.styles.formTable}>
            
            { user.administrator ? 
                <Fragment>
                    <Grid justify="center" container className={styles.topButton}>
                        <Grid item>
                            <input
                                accept=".xlsx, .xls"
                                className={classes.input}
                                id="contained-button-file"
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button 
                                    variant="contained" 
                                    component="span" 
                                    color="primary" 
                                    className={props.styles.primaryButton}
                                >
                                    Importar
                                </Button>
                            </label>
                        </Grid>
                    </Grid>

                    <div className={styles.progress}>
                    {
                        loading ? <LinearProgress variant="indeterminate" color="primary"/> : <CheckCircleIcon color="primary" fontSize="large"/>
                    }
                    </div>
                </Fragment>
            : <h2 className={props.styles.row}>Retiradas</h2> }

            

            <div className={user.administrator ? styles.table : styles.marginTop}>
                <MUIDataTable
                    title={user.administrator ? 'Retiradas' : ''}
                    columns={columns}
                    data={data}
                    options={options(user.administrator, '/retirada')}
                />
            </div>
        </form>
    );
}

export default retiradas;