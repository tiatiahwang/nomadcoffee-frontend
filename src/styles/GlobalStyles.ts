import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    input {
      all: unset;
    }
    * {
      box-sizing: border-box;
    }
    body {
        background-color: ${({ theme }) => theme.bgColor};;
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;
        color: ${({ theme }) => theme.fontColor};
    }
    a {
      text-decoration: none;
      color: inherit;
    }
`;

export default GlobalStyles;
