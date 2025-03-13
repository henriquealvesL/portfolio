import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;

}

body{
  background: #212121;
  font-size: 16px;
  color: #FFFF;
  line-height: 1.5rem;
}

button{
  cursor: pointer;
}

`;
