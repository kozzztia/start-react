import {createGlobalStyle} from "styled-components";
// npm i --save-dev @types/styled-components
// npm install --save styled-components




const LayoutStyle = createGlobalStyle`
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
`

export default LayoutStyle;