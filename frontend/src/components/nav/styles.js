import styled from 'styled-components';

const NavWrapper = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    background-color:#242424;
`
const NavContainer = styled.nav`
    display:flex;
    width:80%;
    justify-content:space-between;
    align-items:center;
    height:80px;

    h2{
        font-size:1.6rem;
    }
    ul{
        list-style:none;
        display:flex;
        li{
            font-size:1.3rem;
            padding:15px;
            a{
                color:#fff;
                text-decoration:none;
            }
        }
    }
`

export {NavWrapper, NavContainer};