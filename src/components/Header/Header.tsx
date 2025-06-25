import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavList,
  NavItem,
  CallbackButtonWrapper,
  StyledLogo,
} from './Header.styled';

const Header = () => {
  return (
    
    <HeaderWrapper>
        <Logo>
  <StyledLogo />
</Logo>
      <Nav>
        <NavList>
          <NavItem><Link to="/">HOME</Link></NavItem>
          <NavItem><Link to="/packages">LUXURY PACKAGES</Link></NavItem>
          <NavItem><Link to="/book">BOOK WITH US</Link></NavItem>
          <NavItem><Link to="/why">WHY LUX TRIPS</Link></NavItem>
          <NavItem><Link to="/contact">CONTACT</Link></NavItem>
          <NavItem><Link to="/client">CLIENT AREA</Link></NavItem>
        </NavList>
      </Nav>
 <CallbackButtonWrapper>
      <span>CALL ME BACK</span>
              <span className="overlay-img3" />
    </CallbackButtonWrapper>

    </HeaderWrapper>
  );
};

export default Header;
