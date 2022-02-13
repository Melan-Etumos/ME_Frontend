import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    line-height: 1;
    font-family : 'Noto Sans KR', 'sans-serif';
    font: ${fonts.body3};
    color: ${colors.grayscale.black}; 
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
