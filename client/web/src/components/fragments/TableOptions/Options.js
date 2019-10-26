import React from 'react';
import CustomToolbar from '../CustomToolbar/CustomToolbar';
import DeleteConfirmation from '../../fragments/DeleteConfirmation/DeleteConfirmation';

const options = (admin, addPath) => {
    const commomConfig = {
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
            }
        }
    }

    if (admin) {
        return {
            ...commomConfig,
            onRowsDelete: () => {
                // Callback function that triggers when row(s) are deleted. 
                // function(rowsDeleted: object(lookup: {[dataIndex]: boolean}, data: arrayOfObjects: {index: number, dataIndex: number})) => void OR false (Returning false prevents row deletion.)
                return (
                    <DeleteConfirmation />
                    
                );
            },
            customToolbar: () => {
                return (
                    <CustomToolbar addPath={addPath} />
                );
            }
        }
    } else {
        return {
            ...commomConfig,
            selectableRows: 'none'
        }
    }
}

export default options;