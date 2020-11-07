import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #3450A1;
    min-height: 100vh;
    padding:16px;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
    display:flex;
    justify-content:center;
  }
  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    letter-spacing: 0.05em;
  }
  h1, h2, h3, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;
