import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: black;
  padding: 10px;
  text-align: center;
`;

const NavLink = styled(Link)`
  color: yellow;
  margin: 0 10px;
  text-decoration: none;
  font-size: 1.2em;

  &:hover {
    color: white;
  }
`;

const Navbar: React.FC = () => (
  <NavContainer>
    <NavLink to="/">Início</NavLink>
    <NavLink to="/projects">Projetos</NavLink>
  </NavContainer>
);

export default Navbar;
