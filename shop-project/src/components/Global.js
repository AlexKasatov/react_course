import { createGlobalStyle } from "styled-components";

export  const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.shop};
        color: hsl(192, 100%, 9%);
        font-size: 1.15em;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;

    }


        `;
