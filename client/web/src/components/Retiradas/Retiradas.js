import React from 'react';
import MUIDataTable from 'mui-datatables';
import PublishIcon from '@material-ui/icons/Publish';
import makeStyles from '@material-ui/styles/makeStyles';
import IconButton from '@material-ui/core/IconButton';

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

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
}));

const retiradas = props => {
    const classes = useStyles();

    return (
        <form className={props.styles.formTable}>
            
            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
                <IconButton
                color="primary"
                className={classes.button}
                aria-label="upload picture"
                component="span"
                >
                    <PublishIcon />
                </IconButton>
            </label>

            <MUIDataTable
                title={ 'Retiradas' }
                columns={ columns }
                data={ data }
                options={ options }
            />
        </form>
    );
}

export default retiradas;