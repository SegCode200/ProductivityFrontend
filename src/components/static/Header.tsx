import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import {BiLogoProductHunt} from "react-icons/bi"

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>
            <BiLogoProductHunt/>
            Productivity
          </Logo>

        <NavLink to="/sign-in">
        <Login>Get Started</Login>
        </NavLink>

        </Main>
      </Container>
    </div>
  )
}

export default Header

const Logo = styled.div`
font-size: 30px;
font-weight: bold;
display: flex;
align-items: center;
`
const Logout = styled.div``

const Login = styled.button`
padding: 10px 20px;
border-radius: 20px;
background-color: black;
border: 0;
outline: none;
color: white;
font-weight: 500;
font-family: Figtree;
cursor: pointer;
transition: all 350ms;
:hover{
  transform: scale(1.09);
}

`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`
const Container = styled.div`
width: 100%;
background-color: #FDFDFD;
height: 80px;
display: flex;
align-items: center;
justify-content: center;
`
