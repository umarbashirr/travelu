import React from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavCtaContainer,
  SearchIcon,
  UserIcon,
  ToggleIcon,
} from './NavbarElement';
import logo from '../../assets/images/logo.png';
import { FaSearch, FaUser, FaBars } from 'react-icons/fa';

function Navbar() {
  return (
    <React.Fragment>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <img src={logo} alt='travelu' />
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLink to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/'>About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/'>Destinations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/'>Tour Package</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/'>Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/'>Pages</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/'>Contact Us</NavLink>
            </NavItem>
          </NavMenu>
          <NavCtaContainer>
            <SearchIcon to='/'>
              <FaSearch />
            </SearchIcon>
            <UserIcon to='/'>
              <FaUser />
            </UserIcon>
            <ToggleIcon>
              <FaBars />
            </ToggleIcon>
          </NavCtaContainer>
        </NavbarContainer>
      </Nav>
    </React.Fragment>
  );
}

export default Navbar;
