import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    .Section{
        text-align: center;
        width:100vw;
        height:100vh;
        background-color: rgb(237,245,224);
        color:rgb(66,87,162);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .About{
        padding: 10px;
        align-content: center;
        justify-items: center;
    }
    .Name{
        font-size: 4vw;
        font-weight: 700;
    }
    .Title{
        font-size: 3vw;
        font-weight:550;
    }
    .Introduction{
        font-size: 2vw;
    }

    @media screen and (max-width:900px){
        .Name{
            font-size: 6vw;
            font-weight: 700;
         } 
         
        .Title{
            font-size: 5vw;
            font-weight:550;
        }
        .Introduction{
            font-size: 4vw;
        }
    }

`;
