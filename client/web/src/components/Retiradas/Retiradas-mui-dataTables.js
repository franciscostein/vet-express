import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MUIDataTable from 'mui-datatables';

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
    print: false
}

const retiradas = props => {
    return (
        <Fragment>
            <Grid justify="center" container className={styles.topButton}>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        className={props.styles.primaryButton}
                    >Importar</Button>
                </Grid>
            </Grid>
            <form className={props.styles.formTable}>
                <MUIDataTable
                    title={ 'Retiradas' }
                    columns={ columns }
                    data={ data }
                    options={ options }
                />
            </form>
        </Fragment>
    );
}

export default retiradas;