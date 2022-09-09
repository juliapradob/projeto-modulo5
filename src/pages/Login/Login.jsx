import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Botao } from "../../components/Button/Button"
import logo from '../../images/logo_livrasilia.png'
import "./Login.css"

export function Login() {

    const navigate = useNavigate()
    const [dados, setDados] = useState({
        email: "",
        senha: ""
    });

    return (
        <main>
            <div className='fundoLogin'>
                <div className="telaLogin">
                    <img src={logo} alt="Logo Livrasilia" />
                    <h2>Faça seu login:</h2>
                    <form>
                        <label htmlFor="email">Email:</label>
                        <input 
                            id='email'
                            type="text"
                            placeholder="Insira o e-mail aqui"
                            onChange={(e) => {
                                setDados({
                                    ...dados,
                                    email: e.target.value
                                })
                            }}/>
                        <label htmlFor="senha">Senha:</label>
                        <input
                            onKeyUp={(e) => {
                                if(e.key == 'Enter') {
                                    if(dados.email == 'gestao@livrasilia.com.br' && dados.senha == 'livrasilia123') {
                                        navigate('/home')
                                    } else {
                                        alert('Dados de login incorretos. Por favor, verifique as informações')
                                    }
                                }
                            }}
                            id='senha'
                            type="password"
                            placeholder="Insira a senha aqui"
                            onChange={(e) => {
                                setDados({
                                    ...dados,
                                    senha: e.target.value
                                })
                            }}/>
                    </form>
                    <Botao texto='Entrar' navegação={false} clique={(e) => {
                        e.preventDefault()
                        if(dados.email == 'gestao@livrasilia.com.br' && dados.senha == 'livrasilia123') {
                            navigate('/home')
                        } else {
                            alert('Dados de login incorretos. Por favor, verifique as informações')
                        }
                    }}/>
                </div>
            </div>
            
        </main>
    )
}