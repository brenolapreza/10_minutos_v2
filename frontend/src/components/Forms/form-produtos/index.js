import axios from 'axios';
import React, { useState } from 'react';
import { ContainerForm, Form, WrapperTitle } from '../style';

import Nav from '../../nav'

export default function CreateProdutos(){
    
    const [campos, setCampos] = useState({
        name: '',
        url: ''
    })
    function handleChangeInput(e){
        campos[e.target.name] = e.target.value;
        setCampos(campos);
    }
    function handleChangeForm(e){
        e.preventDefault();
            axios.post('http://localhost:3000/categorias', campos).then((response) => {
                setCampos(response.data)
                alert('Produto Cadastrado!')
            })
    } 
    return(
        <>
            <Nav/>
            <ContainerForm>
            <Form onSubmit={handleChangeForm}>
                <WrapperTitle>
                    <h2>CRIAR UM PRODUTO</h2>
                </WrapperTitle>
                <input type="text" name="name" placeholder="Nome do produto" id="name" onChange={handleChangeInput}/>
                <input type="text" placeholder="Url da imagem" name="url" id="url" onChange={handleChangeInput}/>
                <button type="submit">Enviar</button>
            </Form>
        </ContainerForm>
        </>
    )
}