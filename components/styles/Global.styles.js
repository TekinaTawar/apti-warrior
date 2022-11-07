import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  //Colors

  //Fonts

  //sizes

}


*, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
  font-family: 'Roboto', sans-serif;
  height: 100%;
}

body {
  border: 2px solid red;
  height: 100%;
}

/* #__next {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
} */

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

input {
  font-family: 'Courier New', Courier, monospace;
}


/*
scroll bar styles
::-webkit-scrollbar {
  width: 10px;
}
Track
::-webkit-scrollbar-track {
  background: #f0f0f0;
}
Handle
::-webkit-scrollbar-thumb {
  background: #cecece;
}
Handle on hover
::-webkit-scrollbar-thumb:hover {
  background: #a7a7a7;
}
*/
`;

export default GlobalStyle;
