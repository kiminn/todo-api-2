import { createGlobalStyle } from "styled-components"
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  // reset.css
  ${reset}
  * {
    box-sizing: border-box;
    list-style: none;
  }
  body {
    background-color: #e7e7e7;
  }
  button {
    border: none;
  }
`


export default GlobalStyles