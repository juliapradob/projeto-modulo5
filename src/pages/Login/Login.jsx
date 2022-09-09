import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Botao } from "../../components/Button/Button"
import logo from '../../images/logo_livrasilia.png'

import styled from "styled-components";

export function Login() {

    const navigate = useNavigate()
    const [dados, setDados] = useState({
        email: "",
        senha: ""
    });

    return (
        <main>
            <FundoLogin>
                <TelaLogin>
                    <img src={logo} alt="Logo Livrasilia" />
                    <h2>Faça seu login:</h2>
                    <Formulario>
                        <label htmlFor="email">Email:</label>
                        <Input 
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
                        <Input
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
                    </Formulario>
                    <Botao texto='Entrar' navegação={false} clique={(e) => {
                        e.preventDefault()
                        if(dados.email == 'gestao@livrasilia.com.br' && dados.senha == 'livrasilia123') {
                            navigate('/home')
                        } else {
                            alert('Dados de login incorretos. Por favor, verifique as informações')
                        }
                     }}/>   
                </TelaLogin>
            </FundoLogin>
            
        </main>
    )
}

const FundoLogin = styled.div`
    background-color: #185ADB;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TelaLogin = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 300px;
        margin-bottom: 32px;
    }
    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
        color: white;
        margin: 16px 0;
    }
    button {
        background-color: #9BE51A;
        font-family: 'Poppins', sans-serif;
        color: black;
        margin-top: 20px;
        border: 0px #9BE51A solid;
        border-radius: 6px;
        font-size: 1.1em;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: 700;
        transition: background-color 0.5s;
        width: 10rem;
        padding: 4px 0;
    }
    button:hover {
        background-color: #C5D7FF;
    }
`

const Formulario = styled.form`
    width: 20rem;
    margin: auto;
    color: white;
    background-color: #185ADB;
`

const Input = styled.input`
    width: 20rem;
    margin: 8px 0;
    font-weight: 600;
    border: 0px solid;
    padding: 6px 6px;
    font-family: 'Poppins', sans-serif;
    color: black;
    font-weight: 500;
    font-size: 12px;
    input::placeholder {
        font-family: 'Poppins', sans-serif;
        color: grey;
        font-weight: 400;
        font-size: 12px;
    }
`