import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ContainerForm, Form, WrapperTitle } from '../style';

import Nav from '../../nav'

export default function CreateEpisodios(){
    
    const [campos, setCampos] = useState({
        name: '',
        url: '',
    })
    const [categoria, setCategoria] = useState([])

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

    useEffect(() => {
        axios.get('http://localhost:3000/categorias').then((response) => {
            setCategoria(response.data)
        })
    }, [setCategoria])


    return(
        <>
            <Nav/>
            <ContainerForm>
            <Form onSubmit={handleChangeForm}>
                <WrapperTitle>
                    <h2>CRIAR UM EPISODIO</h2>
                </WrapperTitle>
                <input type="text" name="name" placeholder="Nome do produto" id="name" onChange={handleChangeInput}/>
                <input type="text" placeholder="Url da imagem" name="url" id="url" onChange={handleChangeInput}/>
                <select name="categoria" id="categoria">
                    {categoria.map((catego, index) => (
                        <option key={index} value={catego.id}>{catego.name}</option>
                    ))}
                </select>
                <button type="submit">Enviar</button>
            </Form>
        </ContainerForm>
        </>
    )
}