import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Skills: React.FC = () => (
  <SkillsContainer>
    <h1>Minhas Habilidades</h1>
    <p>Descrição das habilidades...</p>
  </SkillsContainer>
);

export default Skills;
