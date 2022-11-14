import styled from 'styled-components';

export const Containner = styled.div`


    font-family: "Lato", sans-serif;

margin-left:20%;

.main-head{
    height: 150px;
    background: #FFF;
   
}

.sidenav {
    height: 100%;
    background-color: #0F1A2C;
    overflow-x: hidden;
    padding-top: 20px;
}


.main {
    padding: 0px 10px;
}

@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
}

@media screen and (max-width: 450px) {
    .login-form{
        margin-top: 10%;
    }

    .register-form{
        margin-top: 10%;
    }
}

@media screen and (min-width: 768px){
    .main{
        margin-left: 40%; 
    }

    .sidenav{
        width: 35%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
    }

    .login-form{
        margin-top: 50%;
    }

    .register-form{
        margin-top: 20%;
    }
}


.login-main-text{
    margin-top: 25%;
    margin-left: 18%;
    padding: 60px;
    color: #FFF;
    
}
img{
    width: 70%;
}

.login-main-text h2{
    font-weight: 300;
}

.btn-login{
    margin-top: 5%;
    background-color: #0F1A2C !important;
    color: #fff;
    width: 100px;
}
.btn-register{
    margin-top: 5%;
    margin-left: 3%;
    background-color: #0F1A2C !important;
    color: #fff;
    width: 100px;
}

button:hover{
        color:#A5A5A5;
}
.login{
    padding: 10%;
    text-align: center;
}

`