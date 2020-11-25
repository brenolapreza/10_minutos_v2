import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Wrapper, ContainerMain, WrapperImage} from './style'
import Nav from '../../components/nav/';

import BannerImage from '../../images/BannerMain.png'

export default function Home(){
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        axios.get('https://api10minutos.herokuapp.com/categorias')
        .then((response) => {
            setProdutos(response.data)
        })
    }, [setProdutos])
    
    return(
        <>
        <Nav/>
        <ContainerMain>
            <Wrapper>
                <WrapperImage imgUrl={BannerImage}>
                
                </WrapperImage>
                
                    <ul>
                    {produtos.map((prod, index) => (
                        <li key={index}>
                            <div>
                                <img src={prod.thumbnail} alt=""/>
                            </div>
                            <div>
                                <h3><a href={`episodio/`}>{prod.title}</a></h3>
                            </div>
                        </li>
                        ))}
                    </ul>
            </Wrapper>
        </ContainerMain>
     </>
    )
}