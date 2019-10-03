import React from 'react';
import MUIDataTable from 'mui-datatables';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import LinearProgress from '@material-ui/core/LinearProgress';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import CustomToolbar from '../fragments/CustomToolbar/CustomToolbar';

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

const options = {
    filterType: 'checkbox',
    responsive: 'scrollFullHeight',
    download: false,
    print: false,
    customToolbar: () => {
        return (
            <CustomToolbar />
        );
    }
}

const useStyles = makeStyles(() => ({
    input: {
        display: 'none'
    }
}));

const loading = true;
  
const retiradas = props => {
    const classes = useStyles();
    
    return (
        <form className={props.styles.formTable}>
            
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

            <div className={styles.table}>
                <MUIDataTable
                    title={'Retiradas'}
                    columns={columns}
                    data={data}
                    options={options}
                />
            </div>
        </form>
    );
}

export default retiradas;