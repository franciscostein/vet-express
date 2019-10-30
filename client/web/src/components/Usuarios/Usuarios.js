import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import MUIDataTable from 'mui-datatables';
import Cookies from 'js-cookie';

import options from '../fragments/TableOptions/Options';

const columns = [
    { name: 'id', options: { display: false, viewColumns: false, filter: false, searchable: false } }, 'Nome', 'Nascimento', 'Telefone', 'e-mail', 'Função'
];

const usuarios = props => {
    const { administrator } = Cookies.getJSON('user');
    const [data, setData] = useState([]);

    useEffect(() => {
        const authToken = Cookies.get('authToken');

        axios.get(`/users`, {
            headers: { 'Authorization': `Bearer ${authToken}` }
        })
        .then(response => {
            const users = [];

            response.data.forEach(user => {
                users.push([user._id, user.name, formatDate(user.birthday), user.phone, user.email, user.administrator ? 'Administrador' : 'Motorista']);
            });

            setData(users);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);
    
    const formatDate = date => {
        const dateArray = date.split('-');
        const day = dateArray[2].substring(0, 2);
        const month = dateArray[1];
        const year = dateArray[0];
        return `${day}/${month}/${year}`;
    }

    return (
        <Fragment>
            <h2 className={props.styles.row}>Usuários</h2>
            <form className={props.styles.formTable}>
                <MUIDataTable
                    title={''}
                    columns={columns}
                    data={data}
                    options={options(administrator, '/usuario')}
                />
            </form>
        </Fragment>
    );
}

export default usuarios;