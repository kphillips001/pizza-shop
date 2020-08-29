import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }
  h1, h2 h3 {
    font-family: 'Righteous', cursive;
  }
`

function App() {
  return (
    <>
     <h1>Pizza-shop</h1>
      <GlobalStyle />    
      <div>
        Hello Pizza-shop
      </div>
    </>
  );
}

export default App;
