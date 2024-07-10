import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #000;
  border: 2px solid #fff;
  color: #fff;
  margin: 20px;
  padding: 20px;
  width: 300px;
  font-family: 'Press Start 2P', cursive;
`;

interface ProjectProps {
  name: string;
  description: string;
  url: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ name, description, url }) => (
  <Card>
    <h2>{name}</h2>
    <p>{description}</p>
    <a href={url} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
  </Card>
);

export default ProjectCard;
