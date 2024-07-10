import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Footer from '../components/Footer';

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

const HomeContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: black;
  color: yellow;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin: 0;
`;

const SubTitle = styled.p`
  font-size: 1.5em;
  margin: 10px 0;
`;

const PacmanGif = styled.img`
  width: 300px;
  height: auto;
  margin: 20px 0;
`;

const LinksContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const IconLink = styled.a`
  color: yellow;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: white;
  }
`;

const NavigationLink = styled(Link)`
  color: yellow;
  font-size: 20px;
  margin-top: 20px;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

const Home: React.FC = () => (
  <>
    <GlobalStyle />
    <HomeContainer>
      <Title>Bem-vindo ao Meu Portfólio</Title>
      <SubTitle>Explore meus projetos e habilidades!</SubTitle>
      <PacmanGif src="/pacman.gif" alt="Pacman engolindo código binário" />
      <LinksContainer>
        <IconLink href="https://github.com/ImportFreya" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/thauane-souza/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </IconLink>
      </LinksContainer>
    </HomeContainer>
    <Footer />
  </>
);

export default Home;
