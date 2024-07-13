import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: black;
  color: yellow;
  padding: 20px;
  
  &:hover {
    color: white;
  }
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

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/ImportFreya/repos')
      .then(response => response.json())
      .then(data => setRepos(data));
  }, []);

  return (
  
    <ProjectsContainer>
      <GlobalStyle />
      {repos.map(repo => (
        <ProjectCard 
          key={repo.id} 
          name={repo.name} 
          description={repo.description} 
          url={repo.html_url} 
        />
      ))}
    </ProjectsContainer>
    
  );
};

export default Projects;
