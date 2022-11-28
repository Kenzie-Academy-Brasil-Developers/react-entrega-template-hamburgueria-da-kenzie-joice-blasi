import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        color: unset;
        text-decoration: none;
    }

    ul, ol, li {
        list-style: none;
    }

    input {
        outline: none;
    }

    :root {
        --primary: #27ae60;
        --primary-50: #93d7af;
        --secondary: #eb5757;
        --grey-100: #333333;
        --grey-50: #828282;
        --grey-20: #e0e0e0;
        --grey-0: #f5f5f5;
        --toastify-color-error: #e60000;
        --toastify-color-warning: #ffcd07;
        --toastify-color-success: #168821;
        --toastify-color-info: #155bcb;

        margin-bottom: 3rem;
    }

    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input {
        font-family: 'Inter', sans-serif;
    }

    .container {
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
        padding: 1rem 0;
    }

    @media (min-width: 600px) {
        .container {
            max-width: 550px;
            padding: 1rem;
        }
    }
    
    @media (min-width: 800px) {
        .container {
            max-width: 780px;
            padding: 0.8rem;
        }
    }

    @media (min-width: 1000px) {
        .container {
            max-width: 950px;
            padding: 0.8px;
        }
    }
`;
