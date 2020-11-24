import styled from 'styled-components'

const ContainerImage = styled.div`
    img{
        width:500px;
    }
`

const WrapperEpisodios = styled.div`
    display:flex;
    width:100%;
    height:100vh;
    justify-content:center;
    align-items:center;

`
const ContainerEpisodios = styled.div`
    list-style:none;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    li{
        display:flex;
        background-color:#fff;
        color:#000;
        width:300px;
    }
`
export {WrapperEpisodios, ContainerEpisodios, ContainerImage};