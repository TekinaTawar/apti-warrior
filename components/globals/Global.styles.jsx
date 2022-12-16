import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: stormfaze;
  src: url(/fonts/stormfaze/stormfaze.ttf);
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: metropolis;
  src: url(/fonts/metropolis/metropolis-Light.otf);
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: metropolis;
  src: url(/fonts/metropolis/metropolis-LightItalic.otf);
  font-weight: 300;
  font-style: italic;
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
  src: url(/fonts/metropolis/Metropolis-Bold.otf);
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: Metropolis;
  src: url(/fonts/metropolis/Metropolis-ExtraBold.otf);
  font-weight: 800;
  font-style: normal;
}

:root{
  //Colors
  --black: hsl(0, 0%, 0%);
  --whtie: hsl(0, 0%, 100%);

  --gray--200: hsl(0, 0%, 83%);
  --gray--100: hsl(0, 0%, 67%);
  --gray-0: hsl(0, 0%, 50%);
  --gray-100: hsl(0, 0%, 33%);
  --gray-200: hsl(0, 0%, 17%);

  --primary--300: hsl(40, 100%, 83%):
  --primary--200: hsl(49, 100%, 61%);
  --primary--100: hsl(43, 100%, 67%);
  --primary-0: hsl(48, 97%, 50%);
  --primary-100: hsl(43, 100%, 50%);
  --primary-200: hsl(43, 80%, 50%);
  --primary-300: hsl(43, 70%, 48%);

  --secondary--300: hsl(79, 50%, 83%);
  --secondary--200: hsl(79, 21%, 67%);
  --secondary--100: hsl(79, 21%, 50%);
  --secondary-0: hsl(79, 21%, 33%);
  --secondary-100: hsl(79, 100%, 17%);

  --good: #89CC13;
  --bad: #EF0B0B;
  --neutral: #E38D01;
  
  //Font sizes
  /* @link https://utopia.fyi/type/calculator?c=360,19,1.16,1920,24,1.21,5,3,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */
  --step--3: clamp(0.76rem, calc(0.74rem + 0.09vw), 0.85rem);
  --step--2: clamp(0.88rem, calc(0.85rem + 0.15vw), 1.02rem);
  --step--1: clamp(1.02rem, calc(0.97rem + 0.22vw), 1.24rem); //use it as the most normal size
  --step-0: clamp(1.19rem, calc(1.12rem + 0.32vw), 1.50rem);
  --step-1: clamp(1.38rem, calc(1.28rem + 0.45vw), 1.82rem);
  --step-2: clamp(1.60rem, calc(1.46rem + 0.61vw), 2.20rem);
  --step-3: clamp(1.85rem, calc(1.67rem + 0.82vw), 2.66rem);
  --step-4: clamp(2.15rem, calc(1.90rem + 1.09vw), 3.22rem);
  --step-5: clamp(2.49rem, calc(2.17rem + 1.43vw), 3.89rem);


  //Dynamic spaces
  /* @link https://utopia.fyi/space/calculator?c=360,19,1.16,1920,24,1.21,5,3,&s=0.75|0.5|0.25,1.5|2|3|4|6, */
  --space-4xs: clamp(0.19rem, calc(0.17rem + 0.06vw), 0.25rem);
  --space-3xs: clamp(0.31rem, calc(0.30rem + 0.06vw), 0.38rem);
  --space-2xs: clamp(0.63rem, calc(0.60rem + 0.13vw), 0.75rem);
  --space-xs: clamp(0.88rem, calc(0.82rem + 0.26vw), 1.13rem);
  --space-s: clamp(1.19rem, calc(1.12rem + 0.32vw), 1.50rem);
  --space-m: clamp(1.81rem, calc(1.71rem + 0.45vw), 2.25rem);
  --space-l: clamp(2.38rem, calc(2.23rem + 0.64vw), 3.00rem);
  --space-xl: clamp(3.56rem, calc(3.35rem + 0.96vw), 4.50rem);
  --space-2xl: clamp(4.75rem, calc(4.46rem + 1.28vw), 6.00rem);
  --space-3xl: clamp(7.13rem, calc(6.69rem + 1.92vw), 9.00rem);
  --space-4xl: clamp(9.50rem, calc(8.92rem + 2.56vw), 12.00rem);
  --space-5xl: clamp(14.25rem, calc(13.38rem + 3.85vw), 18.00rem);
  --space-6xl: clamp(19.00rem, calc(17.85rem + 5.13vw), 24.00rem);
  --space-7xl: clamp(23.75rem, calc(22.31rem + 6.41vw), 30.00rem);

  /* One-up pairs */
  --space-4xs-3xs: clamp(0.19rem, calc(0.14rem + 0.19vw), 0.38rem);
  --space-3xs-2xs: clamp(0.31rem, calc(0.21rem + 0.45vw), 0.75rem);
  --space-2xs-xs: clamp(0.63rem, calc(0.51rem + 0.51vw), 1.13rem);
  --space-xs-s: clamp(0.88rem, calc(0.73rem + 0.64vw), 1.50rem);
  --space-s-m: clamp(1.19rem, calc(0.94rem + 1.09vw), 2.25rem);
  --space-m-l: clamp(1.81rem, calc(1.54rem + 1.22vw), 3.00rem);
  --space-l-xl: clamp(2.38rem, calc(1.88rem + 2.18vw), 4.50rem);
  --space-xl-2xl: clamp(3.56rem, calc(3.00rem + 2.50vw), 6.00rem);
  --space-2xl-3xl: clamp(4.75rem, calc(3.77rem + 4.36vw), 9.00rem);
  --space-3xl-4xl: clamp(7.13rem, calc(6.00rem + 5.00vw), 12.00rem);
  --space-4xl-5xl: clamp(9.50rem, calc(7.54rem + 8.72vw), 18.00rem);
  --space-5xl-6xl: clamp(14.25rem, calc(12.00rem + 10.00vw), 24.00rem);
  --space-6xl-7xl: clamp(19.00rem, calc(16.46rem + 11.28vw), 30.00rem);


  /* Custom pairs */

    // deprecated
  --golden-yellow1: hsl(37, 80%, 60%); //underline
  --golden-yellow2: hsl(40.19704433497537, 98.06763285024155%, 40.588235294117645%); //input border
  --golden-yellow3: hsl(30.697674418604652, 94.50549450549451%, 64.31372549019608%); //or
  --golden-yellow4: hsl(43.357664233576635, 100%, 73.13725490196079%) ;//continue text
  --military-green: hsl(78.85714285714288, 20.710059171597635%, 33.13725490196079%);
  --primary-yellow:  rgba(252, 206, 29, 1);
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


/* scroll bar styles
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
} */

`;

export default GlobalStyle;
