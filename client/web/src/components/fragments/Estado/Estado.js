import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const estado = props => (
    <FormControl required className={props.classes.formControl}>
        <InputLabel htmlFor="selectEstado">Estado</InputLabel>
        <Select autoWidth id="selectEstado">
            <MenuItem value="AC">Acre</MenuItem>
            <MenuItem value="AL">Alagoas</MenuItem>
            <MenuItem value="AP">Amapá</MenuItem>
            <MenuItem value="AM">Amazonas</MenuItem>
            <MenuItem value="BA">Bahia</MenuItem>
            <MenuItem value="CE">Ceará</MenuItem>
            <MenuItem value="DF">Distrito Federal</MenuItem>
            <MenuItem value="ES">Espírito Santo</MenuItem>
            <MenuItem value="Go">Goiás</MenuItem>
            <MenuItem value="MA">Maranhão</MenuItem>
            <MenuItem value="MT">Mato Grosso</MenuItem>
            <MenuItem value="MS">Mato Grosso do Sul</MenuItem>
            <MenuItem value="MG">Minas Gerais</MenuItem>
            <MenuItem value="PA">Pará</MenuItem>
            <MenuItem value="PB">Paraíba</MenuItem>
            <MenuItem value="PR">Paraná</MenuItem>
            <MenuItem value="PE">Pernambuco</MenuItem>
            <MenuItem value="PI">Piauí</MenuItem>
            <MenuItem value="RJ">Rio de Janeiro</MenuItem>
            <MenuItem value="RN">Rio Grande do Norte</MenuItem>
            <MenuItem value="RS">Rio Grande do Sul</MenuItem>
            <MenuItem value="RO">Rondônia</MenuItem>
            <MenuItem value="RR">Roraima</MenuItem>
            <MenuItem value="SC">Santa Catarina</MenuItem>
            <MenuItem value="SP">São Paulo</MenuItem>
            <MenuItem value="SE">Sergipe</MenuItem>
            <MenuItem value="TO">Tocantins</MenuItem>
        </Select>
    </FormControl>
);

export default estado;