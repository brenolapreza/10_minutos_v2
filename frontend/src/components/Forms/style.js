import styled from 'styled-components';

const ContainerForm = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:calc(100vh - 80px);
`
const WrapperTitle = styled.div`
    padding: 20px;
    
    h2{
        text-align:center;
        font-size:1.6rem;
    }
`
const Form = styled.form`
    width:600px;
    height:400px;
    display:flex;
    flex-direction:column;
    padding:30px;
    background-color:rgb(36, 34, 34);
    border-radius:7px;


    input, select{
        padding:15px;
        font-size:1.5rem;
        margin:10px;
        background-color:rgb(31, 29, 29);
        color:#fff;
        border:none;
        border-radius:7px;

        &:focus{
            outline:none;
        }
    }
    button{
        padding:15px;
        font-size:1.5rem;
        margin:10px;
        background-color:rgb(31, 29, 29);
        color:#fff;
        border:none;
        border-radius:7px;
        transition:0.5s;

        &:focus{
            outline:none;
            background-color:rgb(49, 46, 46);
        }

        &:hover{
            background-color:rgb(49, 46, 46);
        }

    }
`
export {ContainerForm, Form, WrapperTitle}