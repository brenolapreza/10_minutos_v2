import axios from 'axios';
import React, { useState, useEffect } from 'react'
import  {WrapperEpisodios, ContainerEpisodios } from './style'
import AccordianEpisode from '../../components/accordian-episode'

export default function Episodios(){

    const [categoria, setCategoria] = useState([])

    
    useEffect(() => {
        axios.get(`http://localhost:3000/categorias` ).then((response) => {
            setCategoria(response.data)
        })
    }, [setCategoria])
    
    return(
        
        <WrapperEpisodios>
            <ContainerEpisodios>
                <AccordianEpisode imgUrl={"https://grupovoll.com.br/loja/wp-content/uploads/2020/06/circuito_tf-250x250.jpg"} 
                    linkToWatch="/" 
                    textLinkToWatch="Episodio 1" 
                    titleWatch="Introdução" 
                    descriptionWatch="Conteúdo:
                    Tenha acesso à uma verdadeira Masterclass Prática onde os gigantes Keyner Luiz (Treinamento Funcional e MIT) e Thalyssa Larangeiras (Pilates Avançado) ensinam um circuito completo, do Básico ao Avançado, de Treinamento Funcional"
                />
                <AccordianEpisode imgUrl={"https://grupovoll.com.br/loja/wp-content/uploads/2020/06/circuito_tf-250x250.jpg"} 
                    linkToWatch="/" 
                    textLinkToWatch="Episodio 1" 
                    titleWatch="Introdução" 
                    descriptionWatch="Conteúdo:
                    Tenha acesso à uma verdadeira Masterclass Prática onde os gigantes Keyner Luiz (Treinamento Funcional e MIT) e Thalyssa Larangeiras (Pilates Avançado) ensinam um circuito completo, do Básico ao Avançado, de Treinamento Funcional"
                />
                <AccordianEpisode imgUrl={"https://grupovoll.com.br/loja/wp-content/uploads/2020/06/circuito_tf-250x250.jpg"} 
                    linkToWatch="/" 
                    textLinkToWatch="Episodio 1" 
                    titleWatch="Introdução" 
                    descriptionWatch="Conteúdo:
                    Tenha acesso à uma verdadeira Masterclass Prática onde os gigantes Keyner Luiz (Treinamento Funcional e MIT) e Thalyssa Larangeiras (Pilates Avançado) ensinam um circuito completo, do Básico ao Avançado, de Treinamento Funcional"
                />
                
            </ContainerEpisodios>
            
                       
       </WrapperEpisodios>
    )
}