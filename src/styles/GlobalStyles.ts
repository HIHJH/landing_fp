import { createGlobalStyle } from "styled-components";
import { media } from "./media";

const GlobalStyles = createGlobalStyle`
  html {
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: calc(100vw / 120);

    ${media.phone`
    font-size: calc(100vw / 23.4375);
    `}
  }
`;

export default GlobalStyles;
