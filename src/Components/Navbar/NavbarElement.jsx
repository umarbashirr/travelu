import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: #fff;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media screen and (max-width: 1024px) {
    transition: all 0.4s ease-in-out;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  padding: 0 50px;

  @media screen and (max-width: 1024px) {
    padding: 0 30px;
  }
`;

export const NavLogo = styled(LinkR)``;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const NavLink = styled(LinkR)`
  text-decoration: none;
  color: #444;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  font-weight: 500;

  &:hover {
    color: var(--primary-color);
  }
`;

export const NavCtaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1rem;
`;

export const SearchIcon = styled(LinkR)`
  text-decoration: none;
  color: var(--primary-color);
  cursor: pointer;
`;

export const UserIcon = styled(LinkR)`
  text-decoration: none;
  color: var(--primary-color);
  cursor: pointer;
`;

export const ToggleIcon = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: var(--primary-color);
  font-size: 30px;
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;
