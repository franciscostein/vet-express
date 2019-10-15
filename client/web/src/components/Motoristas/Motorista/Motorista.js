import React, { Fragment } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import SelectUsuario from '../../fragments/SelectUsuario/SelectUsuario';

const motorista = props => {
    return (
        <Fragment>
            <h2 className={props.styles.row}>Motorista</h2>
            <form noValidate autoComplete="off">
                <div className={props.styles.row}>
                    <div className={`${props.styles.col} ${props.styles.span11of12}`}>
                        <SelectUsuario />
                    </div>
                    <div className={`${props.styles.col} ${props.styles.span1of12}`}>
                        <Tooltip title="Novo usuário">
                            <Fab color="primary" size="small" className={`${props.styles.floatRight} ${props.styles.fabMarginTop}`}>
                                <AddIcon />
                            </Fab>
                        </Tooltip>
                    </div>
                </div>

                <h3 className={props.styles.row}>Regiões</h3>
            </form>
        </Fragment>
    );
}

export default motorista;