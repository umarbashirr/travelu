import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  background-color: #000;
  width: 300px;
  height: 100%;
  z-index: 1000;
  transition: 0.5s ease-in-out;
`;

export const AsideToggleButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--white-color);
  font-size: 25px;
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }
`;

export const AsideLogo = styled.img`
  margin: 60px 0 0 20px;
  max-width: 100%;
`;

export const AsideNav = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 20px;
`;

export const AsideNavItem = styled.li`
  padding: 1rem 0;
`;

export const AsideNavLink = styled(LinkR)`
  text-decoration: none;
  font-weight: 500;
  color: var(--white-color);
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }
`;
