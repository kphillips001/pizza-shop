import React from 'react';
import styled from 'styled-components';
import {pizzaRed} from '../Styles/colors';
import {Title} from '../Styles/title';

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
`
const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`
const UserStatus = styled.div `
  color: white;
  font-size: 12px;
  margin-right: 30px;
`

export function Navbar() {
  return <NavbarStyled>
    <Logo>
      Phillips Pizza Place <span role='img' aria-label='phillips pizza place'>🍕</span> 
    </Logo>
    <UserStatus>
      Test
    </UserStatus>
  </NavbarStyled>
}