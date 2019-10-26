import React, { Fragment } from 'react';
import MUIDataTable from 'mui-datatables';
import Cookies from 'js-cookie';

import options from '../fragments/TableOptions/Options';

const columns = ['CNPJ', 'Clínica', 'Cidade', 'Bairro', 'Telefone'];

const data = [
    ['4981', 'VETPAT LAB. DE ANALISE VETERINARIA - SP  COD-4981*', 'CAMPINAS', 'JARDIM BRASIL', '1940629232'],
    ['15240', 'ANIMAL CENTER - CAMPINAS', 'CAMPINAS', 'CHACARA DA BARRA', '1932537000'],
    ['7134', 'DIAGPET - CAMPINAS', 'CAMPINAS', 'NOVA CAMPINA', '1941190201'],
    ['8969', 'LABORATORIO CDVE - CAMPINAS', 'CAMPINAS', 'JARDIM PROENCA', '1932323522'],
    ['7961', 'SCAN SAUDE E CIENCIA ANIMAL-CAMPINAS- COD.7961*', 'CAMPINAS', 'CASTELO', '1932426159'],
    ['3349', 'AMAZOO CLINLAB COD.3349 *', 'JUNDIAI', 'CIDADE SANTOS DUMONT (HORTOLANDIA)', '1148171841'],
    ['13334', 'CLINICA VETERINARIA MUNDO PET - VINHEDO 13334', 'VINHEDO', 'NOVA VINHEDO', '1938469667']
];

const clinincas = props => {
    const user = Cookies.getJSON('user');

    return (
        <Fragment>
            <h2 className={props.styles.row}>Clínicas</h2>
            <form className={props.styles.formTable}>
                <MUIDataTable
                    title={''}
                    columns={columns}
                    data={data}
                    options={options(user.administrator, '/clinica')}
                />
            </form>
        </Fragment>
    );
}

export default clinincas;