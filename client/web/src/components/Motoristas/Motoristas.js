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
                const { segunda, terca, quarta, quinta, sexta, sabado } = arrangeRegion(driver.region);
                drivers.push([driver._id, getUserName(driver.user), segunda.join(', '), terca.join(', '), quarta.join(', '), quinta.join(', '), sexta.join(', '), sabado.join(', ')]);
            });
            setData(drivers);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const getUserName = userId => {

        axios.get(`/users/${userId}?name=true`, {
            headers: { 'Authorization': `Bearer ${authToken}` }
        })
        .then(response => response.data.name)
        .catch(error => {
            console.log(error);
        });
    }

    const arrangeRegion = region => {
        const segunda = [];
        const terca = [];
        const quarta = [];
        const quinta = [];
        const sexta = [];
        const sabado = [];

        region.forEach(element => {
            const { city, weekday } = element;

            weekday.forEach(day => {
                switch(day.toLowerCase()) {
                    case 'segunda':
                        segunda.push(city);
                        break;
                    case 'terca':
                        terca.push(city);
                        break;
                    case 'quarta':
                        quarta.push(city);
                        break;
                    case 'quinta':
                        quinta.push(city);
                        break;
                    case 'sexta':
                        sexta.push(city);
                        break;
                    case 'sabado':
                        sabado.push(city);
                        break;            
                }
            });
        });
        return { segunda, terca, quarta, quinta, sexta, sabado }
    }

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