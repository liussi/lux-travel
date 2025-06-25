import styled from 'styled-components';

import logo from '../../assets/logo.svg';

export const HeaderWrapper = styled.header`
 display: flex;
  align-items: center;
  margin-top:66px;
  margin-left: 48px;
 margin-right: 48px;
`;
export const Logo = styled.div``;
export const StyledLogo = styled.div`
width: 121px;
  height: 68px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  flex-shrink: 0;
`;
export const Nav = styled.nav``;

export const NavList = styled.ul`
display: flex;
  gap: 40px;
  margin-top: 0px;
  margin-left: 178px;
margin-right: 139px;
  padding: 0;
  list-style: none;
   
`;

export const NavItem = styled.li`
  a {
    color: black;
    text-decoration: none;
  }
`;


export const CallbackButtonWrapper = styled.button`
  position: relative;
  background: transparent;
  color: #000;
  text-transform: uppercase;
  padding: 20px 20px;
  border: none;
  cursor: pointer;
  z-index: 0;

  span {
    position: relative;
    z-index: 3;
  }

  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
  background-image: url('/src/assets/crown.svg');
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%) rotate(180deg);
    width: 20px;
    height: 20px;
  background-image: url('/src/assets/crown.svg');
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 2;
  }

  
  ::-webkit-backdrop {
    background: none;
  }

  
  &::marker {
    display: none;
  }


  &::selection {
    display: none;
  }

  &::part(border) {
    display: none;
  }

  background-image: url('/src/assets/button-border.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
