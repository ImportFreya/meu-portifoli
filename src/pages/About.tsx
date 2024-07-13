import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Footer from '../components/Footer';
import profileImage from '../assets/image.png'; // Caminho correto para a imagem

const AboutContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 20px;
  border-radius: 50%;
`;

const Info = styled.div`
  text-align: left;
`;

const Title = styled.h1`
  margin-bottom: 20px; /* Ajuste o valor conforme necessário */
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

const About: React.FC = () => (
  <AboutContainer>
    <GlobalStyle />
    <Content>
      <Image src={profileImage} alt="Minha foto" />
      <Info>
        <p>Olá! Eu sou Thauane Souza, uma desenvolvedora Full Stack apaixonada por tecnologia e inovação. Adoro trabalhar em equipe, jogar, ler, sair para comer, e ouvir músicas. Sou uma pessoa compreensiva, engraçada, dedicada, e aprendo rápido. Estou sempre disposta a correr atrás dos meus sonhos.</p>
        <p>Tenho experiência em várias linguagens de programação e frameworks, incluindo:</p>
        <ul>
          <li>TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>PHP</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>MySQL</li>
        </ul>
        <p>Além disso, possuo certificações em diversas áreas, como:</p>
        <ul>
          <li>AWS Certified Solutions Architect</li>
          <li>Certified Scrum Master (CSM)</li>
          <li>Oracle Certified Java Programmer (OCJP)</li>
          <li>Microsoft Certified: Azure Developer Associate</li>
          <li>Google Cloud Professional Data Engineer</li>
        </ul>
        <p>Experiências profissionais:</p>
        <ul>
          <li><strong>Help Service Desk</strong> na Cencosud (Dezembro 2023 - Atual)</li>
          <li><strong>Analista de Suporte Técnico</strong> na Stefanini (Setembro 2022 - Dezembro 2023)</li>
          <li><strong>Estagiária</strong> na BaneseCard (Agosto 2021 - Agosto 2022)</li>
        </ul>
      </Info>
    </Content>
    <Footer />
  </AboutContainer>
);

export default About;
