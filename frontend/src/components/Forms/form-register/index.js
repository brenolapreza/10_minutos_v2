import React from 'react'
import { ContainerForm, Form, WrapperTitle } from '../style';

export default function FormLogin(){
    return(
        <Form action="">
            <input type="text" name="usuario" id="usuario" placeholder="Usuário"/>
            <input type="password" name="senha" id="senha" placeholder="Senha"/>
            <button>Enviar</button>
        </Form>
    )
}