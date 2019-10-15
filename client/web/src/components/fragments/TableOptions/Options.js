import React from 'react';

import CustomToolbar from '../CustomToolbar/CustomToolbar';

const options = {
    filterType: 'checkbox',
    responsive: 'scrollFullHeight',
    download: false,
    print: false,
    textLabels: {
        body: {
            noMatch: "Desculpe, nenhum registro encontrado",
            toolTip: "Ordenar",
            columnHeaderTooltip: column => `Ordenar por ${column.label}`
        },
        pagination: {
            next: "Próxima página",
            previous: "Página anterior",
            rowsPerPage: "Linhas por página:",
            displayRows: "de",
        },
        toolbar: {
            search: "Procurar",
            viewColumns: "Visualizar colunas",
            filterTable: "Filtrar tabela",
        },
        filter: {
            all: "TODOS",
            title: "FILTROS",
            reset: "LIMPAR TODOS",
        },
        viewColumns: {
            title: "Mostrar colunas",
            titleAria: "Mostrar/Esconder colunas da tabela",
        },
        selectedRows: {
            text: "linha(s) selecionadas",
            delete: "Excluir",
            deleteAria: "Excluir linhas selecionadas",
        },
    },
    customToolbar: () => {
        return (
            <CustomToolbar />
        );
    }
}

export default options;