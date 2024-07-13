import React from 'react';
import styled, { createGlobalStyle }  from 'styled-components';
import { FaReact, FaNodeJs, FaPhp, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiMysql } from 'react-icons/si';
import Footer from '../components/Footer';

const SkillsContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: black;
  color: yellow;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 40px;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;

  svg {
    margin-right: 10px;
  }
`;

const CertificationList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const CertificationItem = styled.li`
  margin: 10px 0;
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

const Skills: React.FC = () => (
  <SkillsContainer>
    <GlobalStyle />
    <div>
      <h2>Linguagens de programação</h2>
      <p>Full Stack Developer</p>
      <SkillList>
        <SkillItem>
          <SiTypescript size={24} /> Typescript
        </SkillItem>
        <SkillItem>
          <FaReact size={24} /> React
        </SkillItem>
        <SkillItem>
          <FaNodeJs size={24} /> Node.js
        </SkillItem>
        <SkillItem>
          <FaPhp size={24} /> PHP
        </SkillItem>
        <SkillItem>
          <FaHtml5 size={24} /> HTML
        </SkillItem>
        <SkillItem>
          <FaCss3Alt size={24} /> CSS
        </SkillItem>
        <SkillItem>
          <SiMysql size={24} /> MySQL
        </SkillItem>
      </SkillList>
    </div>
    <Footer />
  </SkillsContainer>
);

export default Skills;
