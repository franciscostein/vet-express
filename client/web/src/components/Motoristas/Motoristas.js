import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import MUIDataTable from 'mui-datatables';
import Cookies from 'js-cookie';

import options from '../fragments/TableOptions/Options';

const columns = [
    { name: 'id', options: { display: false, viewColumns: false, filter: false, searchable: false } }, 'Nome', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
];

const data = [
    ['123', 'Lívia Giovanna Mendes', 'Embu das Artes, Mococa, Tupã', 'Paulínia, Martinópolis', 'Sorocaba, Guarulhos, São Paulo', 'Campinas, Birigüi', 'São Bernardo do Campo, Sorocaba, Cotia', 'São Paulo, Campinas'],
    ['123', 'Arthur Guilherme Isaac Ramos', 'São José dos Campos, São Paulo, Osasco', 'Pindamonhangaba, São Bernardo do Campo', 'São Vicente, São Paulo', 'São Paulo, Avaré, Araçatuba', 'Sorocaba, São Paulo, Araraquara', 'Lençóis Paulista, São Paulo'],
    ['123', 'Eduarda Maya da Costa', 'Americana, São José dos Campos', 'São Paulo', 'Sorocaba, Bauru', 'Itapecerica da Serra, São Paulo', 'Mauá', 'Campo Limpo Paulista, Araçatuba, Franca'],
    ['123', 'Alexandre Anthony Luan Ramos', 'Embu das Artes, Campinas', 'São Paulo', 'Guarulhos, São Paulo', 'Amparo, Santos', 'São Paulo', 'Limeira, Franca'],
    ['123', 'Isabella Rebeca Francisca Viana', 'Sumaré, Andradina', 'Cubatão, São Paulo', 'São Paulo, Piracicaba', 'Ribeirão Preto', 'São Paulo', 'Sorocaba']
]

const motoristas = props => {
    const { administrator } = Cookies.getJSON('user');
    const [data, setData] = useState([]);

    useEffect(() => {
        const authToken = Cookies.get('authToken');

        axios.get(`/drivers`, {
            headers: { 'Authorization': `Bearer ${authToken}` }
        })
        .then(response => {
            const drivers = [];

            response.data.forEach(driver => {
                drivers.push([driver._id, driver.name, driver.birthday, driver.phone, driver.email, driver.administrator ? 'Administrador' : 'Motorista']);
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