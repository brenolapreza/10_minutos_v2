import styled from 'styled-components'

const AccordianContainer = styled.div`
  display:flex;
  margin:4px;
  justify-content:center;

  img{
      width:180px;
      height:180px;
      margin-right: -5px;
      padding-bottom: 6px;
      padding-top: 6px;
      
  }
`
const AccordianWrapper = styled.div`
    width:50%;
    padding:20px;
    background-color:rgb(36,34,34);
    margin:5px;
    border-radius:0px 4px 4px 0px;
   

    a{
        width:100%;
        color:#e6e6e6;
        font-family:Arial, Helvetica, sans-serif;
        text-decoration:none;
        transition:.5s;
        padding-bottom:10px;
        font-size:20px;
        font-weight:bold;

        &:hover{
            color:#6e8ffa;
        }
    }
    .contentLink{
        position:relative;
        width:100%;
        margin-bottom:10px;
        &::after{
            content: '';
            width:15px;
            height:15px;
            border-radius:100px;
            background-color:#2e2d2d;;
            position:absolute;
            z-index:999;
            right:0;
        }
    }
    p{
        line-height:1.6;
    }
    h3{
        padding-bottom:10px;
    }
`
const AccordianShow = styled.div`
    display:none;
    background-color:#fff;
    color:#000;
    padding:10px;
    width:400px;
`

export {AccordianWrapper, AccordianShow, AccordianContainer} 