import React from "react";
import { Link } from "react-router-dom";
import {NavWrapper, NavContainer} from './styles'

export default function Nav(){
    return(
        <NavWrapper>
            <NavContainer>
                <div>
                    <h2>10 Minutos</h2>
                </div>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/criar-produtos">Cadastrar produto</Link></li>
                        <li><Link to="/registrar">Registrar</Link></li>
                        <li><Link to="/criar-episodio">Cadastrar Episodio</Link></li>
                    </ul>
                </div>
            </NavContainer>
        </NavWrapper>
    )
}