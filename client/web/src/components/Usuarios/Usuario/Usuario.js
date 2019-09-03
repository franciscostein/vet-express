import React from 'react';

import classes from './Usuario.module.css';

const usuario = props => (
    <div>
        <h2>Profile</h2>
    </div>


    <div>
        <ul role="tablist">
            <li role="presentation">
                <a href="#home">Informações</a>
            </li>
            <li role="presentation">
                <a href="#endereco">Endereço</a>
            </li>
            <li role="presentation">
                <a href="#telefones">Telefones</a>
            </li>
            <li role="presentation">
                <a href="#acesso">Acesso</a>
            </li>
        </ul>
        <div>
            <div role="tabpanel" id="home">
                <div>
                    <label for="inputCPF">CPF</label>
                    <input type="text" id="inputCPF"/>
                </div>
                <div>
                    <label for="inputRG">RG</label>
                    <input type="text" id="inputRG"/>
                </div>
                <div>
                    <label for="inputNome">Nome</label>
                    <input type="text" id="inputNome"/>
                </div>
                <div>
                    <label for="inputNascimento">Nascimento</label>
                    <input type="date" id="inputNascimento"/>
                </div>
            </div>
            <div role="tabpanel" id="endereco">
                <div>
                    <label for="inputCEP">CEP</label>
                    <input type="text" id="inputCEP"/>
                </div>
                <div>
                    <label for="inputLogradouro">Logradouro</label>
                    <input type="text" id="inputLogradouro"/>
                </div>
                <div>
                    <label for="inputNumero">No.</label>
                    <input type="text" id="inputNumero"/>
                </div>
                <div>
                    <label for=""></label>
                    <input type="text" id=""/>
                </div>
                <div>
                    <label for=""></label>
                    <input type="text" id=""/>
                </div>
                <div>
                    <label for="selectEstado">Estado</label>
                    <select id="selectEstado" name="estado">
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </div>
            </div>
            <div role="tabpanel" id="telefones">

            </div>
            <div role="tabpanel" id="acesso">

            </div>

            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
        </div>
    </div>
);

export default usuario;