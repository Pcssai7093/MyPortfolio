import {createGlobalStyle} from 'styled-components'
export const GlobalStyle2=createGlobalStyle`
    .Parent{
        width:100%;
        position:fixed;
    }
    .Navbar{
        width:100%;
        text-align: center;
        color:white;
        padding: 20px 0px;
        margin-top:10px;
        /* background-color:white; */
    }
    a{
        color:white;
        text-decoration:none;
        font-weight: 550;
        padding: 0px 10px;
        margin: 10px;
    }

    a:hover{
            font-size: x-large;
            font-weight: 600;
    }
    a.active{
            transform:scale(1.1);
            font-size: x-large;
    }
    .footer{
        position:fixed;
        margin-bottom:-40px;
        margin-left: -4px;
        bottom: 0;
        height:100px;
        width:150%;
        transform: rotate(2deg);
    }
    .header{
        position: fixed;
        height:150px;
        width:150%;
        transform: rotate(2deg);
        z-index: -1;
        margin-top: -50px;
    }
    .header.one,.footer.one{
        background-color: rgb(66,87,162);
    }
    .header.two,.footer.two{
        background-color: rgb(66,87,162);
    }
    .header.three,.footer.three{
        background-color: rgb(66,87,162);
    }
`