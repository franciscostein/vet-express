import React from 'react';
import MUIDataTable from 'mui-datatables';

import options from '../fragments/TableOptions/Options';

const columns = ['Nome', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

const data = [
    ['Lívia Giovanna Mendes', 'Embu das Artes, Mococa, Tupã', 'Paulínia, Martinópolis', 'Sorocaba, Guarulhos, São Paulo', 'Campinas, Birigüi', 'São Bernardo do Campo, Sorocaba, Cotia', 'São Paulo, Campinas'],
    ['Arthur Guilherme Isaac Ramos', 'São José dos Campos, São Paulo, Osasco', 'Pindamonhangaba, São Bernardo do Campo', 'São Vicente, São Paulo', 'São Paulo, Avaré, Araçatuba', 'Sorocaba, São Paulo, Araraquara', 'Lençóis Paulista, São Paulo'],
    ['Eduarda Maya da Costa', 'Americana, São José dos Campos', 'São Paulo', 'Sorocaba, Bauru', 'Itapecerica da Serra, São Paulo', 'Mauá', 'Campo Limpo Paulista, Araçatuba, Franca'],
    ['Alexandre Anthony Luan Ramos', 'Embu das Artes, Campinas', 'São Paulo', 'Guarulhos, São Paulo', 'Amparo, Santos', 'São Paulo', 'Limeira, Franca'],
    ['Isabella Rebeca Francisca Viana', 'Sumaré, Andradina', 'Cubatão, São Paulo', 'São Paulo, Piracicaba', 'Ribeirão Preto', 'São Paulo', 'Sorocaba']
]

const motoristas = props => {
    return (
        <form className={props.styles.formTable}>
            <h2 className={props.styles.row}>Usuários</h2>
            <div>
                <MUIDataTable
                    title={''}
                    columns={columns}
                    data={data}
                    options={options}
                />
            </div>
        </form>
    );
}

export default motoristas;