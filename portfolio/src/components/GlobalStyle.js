import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

// // :root {
//     --primary-color: #EFEEE7;
//     --accent-color: #8D7F2E;
//     --button-color: #FF4E00;
//     --text-color: #232323;
//   }

* {
    margin: 0;
    padding 0;
    box-sizing: border-box
}

body {
    background: #EFEEE7;
    color: #232323;
}

h1 {
    font-size: 4rem;
}
h2 {
    font-size: 2rem;
}
h3 {
    font-size: 1rem;
}

span {
    color: #8D7F2E;
}

button {
padding: 1rem 2rem;
margin: 1rem;
background: #FF4E00;
color: #232323;
border: 1px solid #232323;
font-size: 1rem;
text-decoration: none;
cursor: pointer;
text-transform: uppercase;
transition: all 0.5s ease;
&:hover{
    background-color: #232323;
    color: white;
}
}
`
export default GlobalStyle;