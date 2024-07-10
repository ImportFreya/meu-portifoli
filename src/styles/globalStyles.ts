import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    color: yellow;
    font-family: 'Press Start 2P', cursive;
    margin: 0;
    padding: 0;
    overflow: none; // Para evitar rolagem horizontal em animações
  }

  a {
    color: yellow;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Press Start 2P', cursive;
  }

  button {
    font-family: 'Press Start 2P', cursive;
  }
`;

export default GlobalStyle;
