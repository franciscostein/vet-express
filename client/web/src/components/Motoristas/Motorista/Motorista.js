import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import SelectUsuario from '../../fragments/SelectUsuario/SelectUsuario';
import SelectCidades from '../../fragments/SelectCidades/SelectCidades';
import FormButtons from '../../fragments/FormButtons/FormButtons';

import styles from './Motorista.module.css';

const motorista = props => {
    const history = useHistory();

    const novoMotoristaClickHandler = () => {
        history.push('/usuario');
    }

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
                            <Fab
                                className={`${props.styles.floatRight} ${props.styles.fabMarginTop}`} 
                                color="primary" 
                                size="small" 
                                onClick={() => novoMotoristaClickHandler()}
                            >
                                <AddIcon />
                            </Fab>
                        </Tooltip>
                    </div>
                </div>

                <h3 className={`${props.styles.row} ${styles.h3}`}>Regiões</h3>
                <div className={`${props.styles.row} ${styles.dia}`}>
                    <div className={`${props.styles.col} ${props.styles.span2of2}`}>
                        <SelectCidades dia='Segunda-feira' />                       
                    </div>                    
                </div>
                <div className={`${props.styles.row} ${styles.dia}`}>
                    <div className={`${props.styles.col} ${props.styles.span2of2}`}>
                        <SelectCidades dia='Terça-feira' />
                    </div>
                </div>
                <div className={`${props.styles.row} ${styles.dia}`}>
                    <div className={`${props.styles.col} ${props.styles.span2of2}`}>
                        <SelectCidades dia='Quarta-feira' />
                        
                    </div>
                </div>
                <div className={`${props.styles.row} ${styles.dia}`}>
                    <div className={`${props.styles.col} ${props.styles.span2of2}`}>
                        <SelectCidades dia='Quinta-feira' />
                    </div>
                </div>
                <div className={`${props.styles.row} ${styles.dia}`}>
                    <div className={`${props.styles.col} ${props.styles.span2of2}`}>
                        <SelectCidades dia='Sexta-feira' />
                    </div>
                </div>
                <div className={`${props.styles.row} ${styles.dia}`}>
                    <div className={`${props.styles.col} ${props.styles.span2of2}`}>
                        <SelectCidades dia='Sábado' />
                    </div>
                </div>
                
                <FormButtons styles={props.styles} />
            </form>
        </Fragment>
    );
}

export default motorista;