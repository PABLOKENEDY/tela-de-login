import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Nunito', sans-serif;
        box-sizing:  border-box;
    }

    body {
        font-family: 'Nunito', sans-serif;
        margin: 0;
        padding: 0;
        background-image: linear-gradient(#1c6b75, #81259d);
    }

    input, button, textarea, h1, h2, h3, h4, h5, h6 {
        font-family: 'Comic Sans', sans-serif;
    }
`

