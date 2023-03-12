import {createGlobalStyle} from "styled-components";
// npm i --save-dev @types/styled-components
// npm install --save styled-components



const LayoutStyle = createGlobalStyle`
  html{
    font-size: calc(10px + 1vw);
  }
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif,serif;
  }
  *{
    padding:0;
    margin:0;
    box-sizing: border-box;
  }
  .App{
    width: min(100vw,100%);
    min-height: 100vh;
    overflow: hidden;
    padding:.5em;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
  }
`

export default LayoutStyle;