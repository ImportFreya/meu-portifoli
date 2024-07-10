import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  text-align: center;
  background-color: black;
  color: yellow;
  padding: 10px 0;
  border-top: 1px solid yellow;
  position: fixed;
  bottom: 0;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    &copy; {new Date().getFullYear()} Todos os direitos reservados a TH Developer
  </FooterContainer>
);

export default Footer;
