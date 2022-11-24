import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --preto: #202324;
        --preto-1: #101000;
        --branco: #ffffff;
        --cinza: #cdd4d4;
        --azul: #2E9AFE;
        --azul-1: #007fff;
        --verde-1: #1fa20d;
        --verde-2: #0fa200;

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

    .background-color-branco{
        background-color: var(--branco);
        padding: 2px 5px;
        border-radius: 4px;
    }

    body{
        background-color: var(--preto);
        color: var(--branco);
    }

    main{
        padding-top: 125px;

        @media (min-width: 700px) {
            padding: 0;
            margin-top: 25px;
        }
    }

    button{
        cursor: pointer;
    }

    .hover:hover {
    transition: 2s;
    text-decoration: underline;
    color: var(--azul);
    }

    .hover-2:hover{
        transition: 0.5s;
        text-decoration: underline;
        color: var(--verde-2);
    }
`;
