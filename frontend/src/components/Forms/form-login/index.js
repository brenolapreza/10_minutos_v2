import React from 'react'
import { ContainerForm, Form, WrapperTitle } from '../style';
import Nav from '../../nav'

const FormLogin = () => {

    return (
        <>
            <Nav/>
            <ContainerForm>
            <Form>
                <WrapperTitle>
                    <h2>Acessar</h2>
                </WrapperTitle>
                <input type="text" name="name" placeholder="Usuário" id="name"/>
                <input type="password" placeholder="Senha" name="url" id="url"/>
                <button type="submit">Enviar</button>
            </Form>
        </ContainerForm>
        </>
    )
}
export default FormLogin