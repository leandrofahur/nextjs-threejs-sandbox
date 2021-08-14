import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export default createGlobalStyle`
  :root {
    --black: #000000;    
    
    --light-gray: #E1E1E6;
    --gray: #A8A8B3;
    --dark-gray: #121214;
    --light-red: #FF3333;
    --red: #C23E3C;
    --yellow: #EBA417;
    --white: #FFFFFF; 
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;     
  }
  
  html, body, #root {  
    max-height: 100vh;
    max-width: 100%;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;        
  }
  
  @media(max-width:1080px) {
    html { 
      font-size: 93.75%
    }
  }
  
  @media(max-width:720px) {
    html { 
      font-size: 87.5%
    }
  }
  
  body { 
    background: var(--dark-gray);
    color: var(--white);
  }

  body, input, textarea, select, button {
    font: 400 1rem Roboto, sans-serif;
  }  
`;
