import {createGlobalStyle} from 'styled-components'
export const GlobalStyle1=createGlobalStyle`


body{
    /* background-color:rgb(237,245,224); */
}

.cont{
    padding-top: 150px;
    text-align:center;
}

.work-wrap{
    width:100%;
    /* margin-left:-2px; */
}

.work-wrap:nth-last-child(1){
    margin-bottom: 100px;
}
/* .work-wrap:hover{
    box-shadow: 0px 0px 2px;
} */
.work-card{
    padding: 10px;
    width:40%;
    margin:10px auto;
    color:#02886f;
    border-radius:10px;
    font-weight: 600;
}

.work-card .title{
    font-size: 3vw;
}

.work-card .time-span{
    font-size: 1vw;
}

.work{
    width:70%;
    /* padding: 5px; */
    color:white;
    background-color: rgb(66,87,162);
    margin: 0 auto;
    /* border-radius: 10px; */
}


@media screen and (max-width:900px){
    .work-card .title{
    font-size: 4vw;
    }

    .work-card .time-span{
    font-size: 2vw;
    }
}

`