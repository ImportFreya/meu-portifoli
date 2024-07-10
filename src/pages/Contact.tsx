import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Contact: React.FC = () => (
  <ContactContainer>
    <h1>Contato</h1>
    <p>Formas de entrar em contato...</p>
  </ContactContainer>
);

export default Contact;
