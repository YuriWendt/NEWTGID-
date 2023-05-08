import styled, { createGlobalStyle, css } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${theme.colors.white};
    background: url(${theme.img.backgroundgradient});
    overflow-x: hidden;
    

    > div{
      /* min-height:100vh;
      height: 100%;
      display: table;
      width: 100%; */
    }
  }

  body, input, button, textarea, select, option{
    font: 400 16px 'Gotham HTF Book', sans-serif;

  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;


