import Api from '../../Api';
import React, { useState } from 'react';
import { ContainerForm, Form, WrapperTitle } from '../style';

import Nav from '../../nav'

export default function CreateProdutos(){
    
    const [campos, setCampos] = useState({
        title: '',
        description: '',
        thumbnail: '',
        episodes: [
            {
                "title": "Episodio Teste",
                "description": "Um teste de ep",
                "thumbnail": "https://i.ytimg.com/vi/XOHNCn0dX0Qs/sddefault.jpg",
                "link_watch":"https://www.youtube.com/watch?v=LRiuhCsxHLs"
                }
            ]
    })
    function handleChangeInput(e){
        campos[e.target.name] = e.target.value;
        setCampos(campos);
    }
    function handleChangeForm(e){
        e.preventDefault();
            Api.post('/nova', campos).then((response) => {
                
                setCampos(response.data)
                alert('Produto Cadastrado!')
            }).catch(error => {
                console.log(error.message);
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
                <input type="text" name="title" placeholder="Nome do produto" id="title" onChange={handleChangeInput}/>
                <input type="text" placeholder="Url da imagem" name="thumbnail" id="thumbnail" onChange={handleChangeInput}/>
                <input type="text" placeholder="Descrição" name="description" id="description" onChange={handleChangeInput}/>
                
                <button type="submit">Enviar</button>
            </Form>
        </ContainerForm>
        </>
    )
}