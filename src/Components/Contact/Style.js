import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`
    body{
        background-color: rgb(237,245,224);
    }
    .cont{
        height: 100vh;
        width: 100vw;
        display:flex;
        flex-direction: row;
        justify-content:center;
        align-items: center;
        
    }
    .cont i{
        color:rgb(66,87,162);
        font-size: 5vw;
    }

`