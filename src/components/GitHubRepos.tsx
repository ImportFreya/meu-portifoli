import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchGitHubData } from '../utils/fetchGitHubData';

const ReposContainer = styled.div`
  margin-top: 20px;
  color: yellow;
`;

const Repo = styled.div`
  background-color: #333;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const RepoName = styled.h3`
  margin: 0;
`;

const GitHubRepos: React.FC = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const username = 'ImportFreya'; // Seu nome de usuário do GitHub

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGitHubData(username);
      setRepos(data);
    };

    fetchData();
  }, []);

  return (
    <ReposContainer>
      <h2>Meus Repositórios no GitHub</h2>
      {repos.map((repo) => (
        <Repo key={repo.id}>
          <RepoName>{repo.name}</RepoName>
          <p>{repo.description}</p>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">Ver Repositório</a>
        </Repo>
      ))}
    </ReposContainer>
  );
};

export default GitHubRepos;
