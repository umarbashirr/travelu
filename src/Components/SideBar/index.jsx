import React from "react";
import {
  Aside,
  AsideLogo,
  AsideToggleButton,
  AsideNav,
  AsideNavItem,
  AsideNavLink,
} from "./SideBarElement";
import logo from "../../assets/images/mobilelogo.png";
import { FaTimes } from "react-icons/fa";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <Aside isOpen={isOpen}>
      <AsideToggleButton onClick={toggle}>
        <FaTimes />
      </AsideToggleButton>
      <AsideLogo src={logo} alt="travelu" />
      <AsideNav>
        <AsideNavItem>
          <AsideNavLink to="/">Home</AsideNavLink>
        </AsideNavItem>
        <AsideNavItem>
          <AsideNavLink to="/">About Us</AsideNavLink>
        </AsideNavItem>
        <AsideNavItem>
          <AsideNavLink to="/">Destinations</AsideNavLink>
        </AsideNavItem>
        <AsideNavItem>
          <AsideNavLink to="/">Tour Package</AsideNavLink>
        </AsideNavItem>
        <AsideNavItem>
          <AsideNavLink to="/">Blog</AsideNavLink>
        </AsideNavItem>
        <AsideNavItem>
          <AsideNavLink to="/">Pages</AsideNavLink>
        </AsideNavItem>
        <AsideNavItem>
          <AsideNavLink to="/">Contact Us</AsideNavLink>
        </AsideNavItem>
      </AsideNav>
    </Aside>
  );
};

export default SideBar;
