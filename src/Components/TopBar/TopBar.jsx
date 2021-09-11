import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import styled from "styled-components";

function TopBar() {
  return (
    <TopBarContainer>
      <ContactWrapper>
        <a href="tel:00917889737464">
          <FaPhone />
          +91 7889737464
        </a>
        <a href="mailto:umarbashir93@outlook.com">
          <FaEnvelope />
          umarbashir93@outlook.com
        </a>
      </ContactWrapper>
      <SocialIconWrapper>
        <a href="/">
          <FaFacebook />
        </a>
        <a href="/">
          <FaInstagram />
        </a>
        <a href="/">
          <FaTwitter />
        </a>
        <a href="/">
          <FaWhatsapp />
        </a>
      </SocialIconWrapper>
      <LanguageDropdown>
        <a href="/">En</a>
      </LanguageDropdown>
    </TopBarContainer>
  );
}

export default TopBar;

const TopBarContainer = styled.div`
  background-color: #304f47;
  color: #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 50px;
  margin: 0 auto;
  height: 40px;
  font-size: 14px;

  a {
    text-decoration: none;
    color: #f2f2f2;
    cursor: pointer;
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
