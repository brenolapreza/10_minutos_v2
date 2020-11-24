import styled from 'styled-components'

const ContainerMain = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
`

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:80%;
    
    ul{
        display:flex;
        list-style:none;
        flex-wrap:wrap;

        li{
            margin:10px 5px;
            h3{
                text-align:center;
                margin-top:10px;
                font-size:15px;
            }
        }
        img{
            width:250px;
        }
    }
`
const WrapperImage = styled.div`
    margin-top:20px;
    background: url(${(props)=>props.imgUrl});
    height:300px;
    background-size:cover;
    background-repeat:no-repeat;
`
export {Wrapper, ContainerMain, WrapperImage}