import React, { useState } from "react";
import { FaBars, FaSearch, FaTimes, FaUser, FaUserAlt } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const [navClick, setNavClick] = useState(false);

  return (
    <IconContext.Provider value={{ color: "#ff7f47", size: "20px" }}>
      <Nav>
        <Logo src={logo} alt="Travelu" />

        <NavMenu>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Destinations</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Tour Package</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Blogs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Pages</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Contact Us</NavLink>
          </NavItem>
        </NavMenu>
        <CtaButtonContainer>
          <a href="/">
            <FaSearch />
          </a>
          <a href="/">
            <FaUser />
          </a>
        </CtaButtonContainer>
        <NavToggle
          onClick={() => {
            setNavClick(!navClick);
          }}
        >
          {navClick ? <FaTimes /> : <FaBars />}
        </NavToggle>
      </Nav>
    </IconContext.Provider>
  );
}

export default Navbar;

const Nav = styled.nav`
  padding: 0 50px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background-color: #fff;
`;

const Logo = styled.img`
  max-width: 100%;
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const NavItem = styled.li`
  font-weight: 500;
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #444;
`;

const NavToggle = styled.button`
  background-color: transparent;
  color: #ff7f47;
  border: none;
  outline: none;
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

const CtaButtonContainer = styled.div`
  a {
    color: #ff7f47;
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
