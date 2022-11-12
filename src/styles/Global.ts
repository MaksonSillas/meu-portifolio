import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --preto: #101310;
        --branco: #ffffff;
        --cinza: #cdd4d4;
        --azul: #104d63;
        --verde-1: #8fa20d;
        --verde-2: #ade666;

    }

    *{
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-family: 'Nunito', sans-serif;
    }

    button{
        cursor: pointer;
    }
`;
