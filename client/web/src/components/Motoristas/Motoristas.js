import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import MUIDataTable from 'mui-datatables';
import Cookies from 'js-cookie';

import options from '../fragments/TableOptions/Options';

const columns = [
    { name: 'id', options: { display: false, viewColumns: false, filter: false, searchable: false } }, 'Nome', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
];

const motoristas = props => {
    const authToken = Cookies.get('authToken');
    const { administrator } = Cookies.getJSON('user');
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`/drivers`, {
            headers: { 'Authorization': `Bearer ${authToken}` }
        })
        .then(response => {
            const drivers = [];    

            response.data.forEach(driver => {
                const { _id, user, region } = driver;
                const { monday, tuesday, wednesday, thursday, friday, saturday } = region;

                drivers.push([_id, user.name, monday.cities.join(', '), tuesday.cities.join(', '), wednesday.cities.join(', '), thursday.cities.join(', '), friday.cities.join(', '), saturday.cities.join(', ')]);
            });
            setData(drivers);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <Fragment>
            <h2 className={props.styles.row}>Motoristas</h2>
            <form className={props.styles.formTable}>
                <MUIDataTable
                    title={''}
                    columns={columns}
                    data={data}
                    options={options(administrator, '/motorista')}
                />
            </form>
        </Fragment>
    );
}

export default motoristas;