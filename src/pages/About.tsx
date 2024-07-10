import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const About: React.FC = () => (
  <AboutContainer>
    <h1>Sobre Mim</h1>
    <p>Informações sobre você...</p>
  </AboutContainer>
);

export default About;
