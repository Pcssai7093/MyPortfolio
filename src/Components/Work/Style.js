import {createGlobalStyle} from 'styled-components'
export const GlobalStyle1=createGlobalStyle`
body{
    background-color:rgb(237,245,224);
}

.cont{
    padding-top: 200px;
    text-align:center;
}

.work-wrap{
    width:50%;
    margin:0 auto;
    border: 2px solid rgb(66,87,162);
    transform: rotate(2deg);
    padding: 20px 0;
    background-color:rgb(66,87,162) ;
    margin-bottom: 15px;
}

.work-wrap:hover{
    box-shadow: 0px 0px 2px;
}
.work-card{
    padding: 10px;
    width:40%;
    margin:10px auto;
    /* color:rgb(66,87,162); */
    color:white;
    /* border:5px solid rgb(66,87,162); */
    border-radius:10px;
    font-weight: 600;
    transform: rotate(-2deg);
}

.work{
    width:70%;
    padding: 5px;
    color:white;
    background-color: rgb(66,87,162);
    margin: 0 auto;
    border-radius: 10px;
}


@media screen and (max-width:900px){
   
}

`