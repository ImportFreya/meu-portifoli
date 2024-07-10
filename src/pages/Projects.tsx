import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

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

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/ImportFreya/repos')
      .then(response => response.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <ProjectsContainer>
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
