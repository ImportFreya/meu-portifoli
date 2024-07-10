import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: black;
  color: yellow;
  padding: 10px;
  font-family: 'Press Start 2P', cursive;
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.nav`
  a {
    color: yellow;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <h1>TH Developer</h1>
    <Nav>
      <Link to="/">Início</Link>
      <Link to="/projects">Projetos</Link>
      <Link to="/skills">Habilidades</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/contact">Contato</Link>
    </Nav>
  </HeaderContainer>
);

export default Header;
