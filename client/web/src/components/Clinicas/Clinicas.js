import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import MUIDataTable from 'mui-datatables';

import options from '../fragments/TableOptions/Options';

const columns = [{ 
    name: 'id', options: { display: false, viewColumns: false, filter: false, searchable: false } }, 'Nome', 'CNPJ', 'Cidade', 'Bairro', 'Telefone'
];

const clinincas = props => {
    const authToken = Cookies.get('authToken');
    const { administrator } = Cookies.getJSON('user');
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`/clinics`, {
            headers: { 'Authorization': `Bearer ${authToken}` }
        })
        .then(response => {
            const clinics = [];
            
            response.data.forEach(clinic => {
                const { _id, name, cnpj, address, phone } = clinic;

                clinics.push([_id, name, cnpj, address.city, address.neighborhood, phone]);
            });
            setData(clinics);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <Fragment>
            <h2 className={props.styles.row}>Clínicas</h2>
            <form className={props.styles.formTable}>
                <MUIDataTable
                    title={''}
                    columns={columns}
                    data={data}
                    options={options(administrator, '/clinica')}
                />
            </form>
        </Fragment>
    );
}

export default clinincas;