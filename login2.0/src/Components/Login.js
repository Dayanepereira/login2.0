import React from "react"
import { FaUser, FaLock } from "react-icons/fa"
import { useState } from "react"
import "./Login.css"
import Swal from 'sweetalert2'

const Login = () => {

  const [email, setEmail] = useState("");
  const [senha, setsenha] = useState("");

  const enviar = (event) => {
    event.preventDefault();
    console.log("envio")

    Swal.fire({
      title: "Enviando os dados com sucesso!",
      icon: "success"
    });
  }

  return (
    <div className="container">
      <form onSubmit={enviar}>
        <h1>Login</h1>

        <div className="imput-componente">
          <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
          <FaUser className="icon" />
        </div>

        <div className="imput-componente">
          <input type="password" placeholder="Senha" onChange={(e) => setsenha(e.target.value)} />
          <FaLock className="icon" />
        </div>

          <div className="recal-forget">
            <label>
              <input type="checkbox" placeholder="checkbox" />
              Lembrar de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button>Entrar</button>
          
          <div className="signup-link">
            <a href="#">Crie sua conta</a>
          </div>

      </form>

    </div>
  )
}

export default Login
