import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  text-align: center;
  color: blue;
  background-color: aliceblue;
  margin:0;
  padding: 0;

  li{
    list-style: none;
  }

  body {
 font-family: 'Montserrat', sans-serif;
 color: white;
}

h1, h2, h3, h4, h5, h6 {
 font-family: 'JetBrains Mono', monospace;
 font-weight: 900;
 color: white;
 /* text-transform: uppercase; */
}
:visited{
  list-style: none;
  
}

}

`;

export default GlobalStyle;
