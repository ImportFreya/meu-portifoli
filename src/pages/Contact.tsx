import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import pacmanImage from '../assets/image.png';
import Footer from '../components/Footer';

const ContactContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background-color: black;
  border: 3px solid red;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  text-align: center;
  margin-top: -20px; /* Ajuste a margem superior para aproximar do GIF */
`;

const PacmanImage = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb {
    background: yellow;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 100px;
  }
`;

const PacmanGif = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 10px; /* Ajuste a margem inferior do GIF */
  margin-top: -250px;
`;

const ContactInfo = styled.div`
  margin-top: 20px;
`;

const IconLink = styled.a`
  color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-top: 10px;
  font-size: 20px;

  &:hover {
    color: lightyellow;
  }
`;

const LinkedInIcon = styled(FaLinkedin)`
  margin-right: 8px;
  font-size: 24px;
`;

const EmailIcon = styled(FaEnvelope)`
  margin-right: 8px;
  font-size: 24px;
`;

const Contact: React.FC = () => (
  <ContactContainer>
    <GlobalStyle />
    <PacmanGif src="/pacman.gif" alt="Pacman engolindo código binário" />
    <Card>
      <PacmanImage src={pacmanImage} alt="Pac-Man" />
      <h1>Contato</h1>
      <ContactInfo>
        <p>Nome: Thauane Souza</p>
        <p>Cargo: Desenvolvedora Full Stack</p>
        <IconLink href="mailto:thauane-souza1@live.com">
          <EmailIcon />
          thauane-souza1@live.com
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/thauane-souza/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
          LinkedIn
        </IconLink>
      </ContactInfo>
    </Card>
    <Footer />
  </ContactContainer>
);

export default Contact;
