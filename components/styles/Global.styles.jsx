import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: stormfaze;
  src: url(/fonts/stormfaze/stormfaze.ttf);
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: Metropolis;
  src: url(/fonts/metropolis/Metropolis-Regular.otf); //not used till now
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: Metropolis;
  src: url(/fonts/metropolis/Metropolis-Medium.otf);
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: Metropolis;
  src: url(/fonts/metropolis/Metropolis-ExtraBold.otf);
  font-weight: 800;
  font-style: normal;
}

:root{
  //Colors (black, white, military green, golden yellow, yellow)
  --golden-yellow1: hsl(37, 80%, 60%); //underline
  --golden-yellow2: hsl(40.19704433497537, 98.06763285024155%, 40.588235294117645%); //input border
  --golden-yellow3: hsl(30.697674418604652, 94.50549450549451%, 64.31372549019608%); //or
  --golden-yellow4: hsl(43.357664233576635, 100%, 73.13725490196079%) ;//continue text
  --military-green: hsl(78.85714285714288, 20.710059171597635%, 33.13725490196079%);
  //Font sizes
  --step--2: clamp(0.91rem, calc(0.90rem + 0.05vw), 0.96rem);
  --step--1: clamp(1.09rem, calc(1.07rem + 0.11vw), 1.20rem);
  --step-0: clamp(1.31rem, calc(1.27rem + 0.19vw), 1.50rem);
  --step-1: clamp(1.58rem, calc(1.51rem + 0.31vw), 1.88rem);
  --step-2: clamp(1.89rem, calc(1.79rem + 0.47vw), 2.34rem);
  --step-3: clamp(2.27rem, calc(2.12rem + 0.68vw), 2.93rem);
  --step-4: clamp(2.72rem, calc(2.50rem + 0.96vw), 3.66rem);
  --step-5: clamp(3.27rem, calc(2.96rem + 1.35vw), 4.58rem);

  //Dynamic spaces
  --space-3xs: clamp(0.31rem, calc(0.30rem + 0.06vw), 0.38rem);
  --space-2xs: clamp(0.69rem, calc(0.67rem + 0.06vw), 0.75rem);
  --space-xs: clamp(1.00rem, calc(0.97rem + 0.13vw), 1.13rem);
  --space-s: clamp(1.31rem, calc(1.27rem + 0.19vw), 1.50rem);
  --space-m: clamp(2.00rem, calc(1.94rem + 0.26vw), 2.25rem);
  --space-l: clamp(2.63rem, calc(2.54rem + 0.38vw), 3.00rem);
  --space-xl: clamp(3.94rem, calc(3.81rem + 0.58vw), 4.50rem);
  --space-2xl: clamp(5.25rem, calc(5.08rem + 0.77vw), 6.00rem);
  --space-3xl: clamp(7.88rem, calc(7.62rem + 1.15vw), 9.00rem);

  /* One-up pairs */
  --space-3xs-2xs: clamp(0.31rem, calc(0.21rem + 0.45vw), 0.75rem);
  --space-2xs-xs: clamp(0.69rem, calc(0.59rem + 0.45vw), 1.13rem);
  --space-xs-s: clamp(1.00rem, calc(0.88rem + 0.51vw), 1.50rem);
  --space-s-m: clamp(1.31rem, calc(1.10rem + 0.96vw), 2.25rem);
  --space-m-l: clamp(2.00rem, calc(1.77rem + 1.03vw), 3.00rem);
  --space-l-xl: clamp(2.63rem, calc(2.19rem + 1.92vw), 4.50rem);
  --space-xl-2xl: clamp(3.94rem, calc(3.46rem + 2.12vw), 6.00rem);
  --space-2xl-3xl: clamp(5.25rem, calc(4.38rem + 3.85vw), 9.00rem);

  /* Custom pairs */
  --space-s-l: clamp(1.31rem, calc(0.92rem + 1.73vw), 3.00rem);

}


*, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  /* font-size: 62.5%; */
  font-family: Metropolis, sans-serif;
  height: 100%;
}

body {
  /* border: 2px solid red; */
  height: 100%;
}

#__next {
  width: 100%; //this is redundat cause next is div which is block hence take the full width
  height: 100%;
  /* min-height: 100%; */
  /* background-color: orange; */
}

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
