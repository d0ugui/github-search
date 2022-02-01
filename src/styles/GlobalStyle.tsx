import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FAFAFA;
    height: 100vh;
  }
`;