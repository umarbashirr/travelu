import React from 'react';
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import styled from 'styled-components';

function TopBar() {
  return (
    <Nav>
      <TopBarContainer>
        <ContactWrapper>
          <a href='tel:00917889737464'>
            <FaPhone />
            +91 7889737464
          </a>
          <a href='mailto:umarbashir93@outlook.com'>
            <FaEnvelope />
            umarbashir93@outlook.com
          </a>
        </ContactWrapper>
        <SocialIconWrapper>
          <a href='/'>
            <FaFacebook />
          </a>
          <a href='/'>
            <FaInstagram />
          </a>
          <a href='/'>
            <FaTwitter />
          </a>
          <a href='/'>
            <FaWhatsapp />
          </a>
        </SocialIconWrapper>
        <LanguageDropdown>
          <a href='/'>En</a>
        </LanguageDropdown>
      </TopBarContainer>
    </Nav>
  );
}

export default TopBar;

const Nav = styled.nav`
  background-color: #304f47;
  color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  width: 100%;
  max-width: 1140px;
  margin: auto;
  padding: 0 50px;

  a {
    text-decoration: none;
    color: #f2f2f2;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    padding: 0 30px;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1rem;

  a {
    display: flex;
    align-items: center;
    gap: 0 6px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SocialIconWrapper = styled.div`
  a {
    color: #ff7f47;
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
`;

const LanguageDropdown = styled.button`
  background-color: transparent;
  border: 1px solid #f2f2f2;
  color: #f2f2f2;
  padding: 0.3rem;
  cursor: pointer;
`;
