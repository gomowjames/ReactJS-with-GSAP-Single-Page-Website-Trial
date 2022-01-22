import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components';
import css from './cssVariables';

export const GlobalStyle = createGlobalStyle`

  ${normalize}
 
  body {
    background: #FFF;
    font-smoothing: antialiased;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 300;
    line-height: 1.6;
  }
  
  section {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    overflow-x: clip;
    margin-bottom: 15vw;
  }

  h1, h2, h3, h4 {
    font-family: 'Bebas Neue', sans-serif;
  }
  
  h1 {
    font-size: 9rem;
    font-size: min(max(2rem, 8vw), 9rem);
    margin: 0;
    line-height: 0.95;
    
    ${css.mobile} {
      font-size 3rem;
    }
  }
  
  h2 {
    font-size: 5.8125rem;
    line-height: 0.95;
    color: #2B3144;
    margin: 0 0 2rem;
    font-size: min(max(1rem, 8vw), 5.8125rem);
    font-size 6vw;

    ${css.mobile} {
      font-size 2.5rem;
    }
  }
  
  h3 {
    font-size: 2.125rem;
    line-height: 1;
    color: #2B3144;
    
    ${css.mobile} {
      font-size 2rem;
    }
  }
  
  h4 {
    font-size: 4vw;
    margin: 0;
    line-height: 1;

    ${css.mobile} {
      font-size: 9vw;
    }
  }
  
  a {
    color: #414A69;
    font-weight: 500;
    text-decoration: none;    
  }

  img {
    max-width: 100%;
  }
`;
