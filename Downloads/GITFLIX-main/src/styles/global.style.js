import { createGlobalStyle } from "styled-components"
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  // reset.css
  ${reset}
  * {
    box-sizing: border-box;
    list-style: none;
    color: white;
  }
  /* 배경색 우리 테마에 맞게 변경해야함 */
  body {
    background-color: #111;
  }
  button {
    border: none;
  }
`


export default GlobalStyles