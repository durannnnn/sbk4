import React from "react";
import styles from './style.css'
import Logo from '/src/assets/logo.png'
function Register(){

    return ( 
        <div className="container">
            <div className="container-left">
                <img src={Logo} alt="" />
            </div>
            <div className="container-right">

                <h1> Cadastre os dados do cliente </h1>

                <form >
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="Senha" />
                    <input type="integer" placeholder="Cargo" />
                    <input type="date" placeholder="Email" />
                    <input type="date" placeholder="CPF" />
                    
                   
                </form>

                 <button>
                    ENVIAR
                    
                 </button>
            </div>
        </div> 
       
);
}
export default Register