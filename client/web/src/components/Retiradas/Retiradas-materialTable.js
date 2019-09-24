import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MaterialTable from 'material-table';

import tableIcons from '../fragments/TableIcons/TableIcons';

import styles from './Retiradas.module.css';

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
                <MaterialTable
                    title='Retiradas'
                    icons={tableIcons}
                    columns={[
                        { title: 'Clínica', field: 'clinica' },
                        { title: 'Data', field: 'data' },
                        { title: 'Observação', field: 'obs' },
                        { title: 'Motorista', field: 'motorista' }
                    ]}
                    data={[
                        { clinica: 'VETPAT LAB. DE ANALISE VETERINARIA - SP  COD-4981*', data: '20/09/2019', obs: '', motorista: 'Jevan Stout' },
                        { clinica: 'ANIMAL CENTER - CAMPINAS', data: '20/09/2019', obs: '', motorista: 'Jevan Stout' },
                        { clinica: 'DIAGPET - CAMPINAS', data: '20/09/2019', obs: '', motorista: 'Jevan Stout' },
                        { clinica: 'LABORATORIO CDVE - CAMPINAS', data: '20/09/2019', obs: '.', motorista: 'Jevan Stout' },
                        { clinica: 'SCAN SAUDE E CIENCIA ANIMAL-CAMPINAS- COD.7961*', data: '20/09/2019', obs: 'retirada de material', motorista: 'Jevan Stout' },
                        { clinica: 'AMAZOO CLINLAB COD.3349 *', data: '20/09/2019', obs: 'retirada de material', motorista: 'Thelma Ahmed' },
                        { clinica: 'CLINICA VETERINARIA MUNDO PET - VINHEDO 13334', data: '20/09/2019', obs: '2 formulario raiva', motorista: 'Nayan Morgan' }
                    ]}
                    actions={[
                        {
                            icon: tableIcons.Add,
                            tooltip: 'Adicionar',
                            isFreeAction: true,
                            onClick: (event, rowData) => {
                                // Do save operation
                            }
                        },
                        {
                            icon: tableIcons.Delete,
                            tooltip: 'Excluir',
                            onClick: (event, rowData) => {
                                // Do save operation
                            }
                        }
                    ]}
                    options={{
                        actionsColumnIndex: -1,
                        sorting: true
                    }}
                    localization={{
                        header: {
                            actions: ''
                        }
                    }}
                />
            </form>
        </Fragment>
    );
}

export default retiradas;