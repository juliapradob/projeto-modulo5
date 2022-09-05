import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

import S from './CreateClientes.module.css'

export const CreateClientes = () => {
    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cpf, setCpf] = useState('')

    const EnviaCliente = () => {
        axios.post(`https://api-livrasilia.herokuapp.com/clientes`, {
            nome,
            email,
            telefone,
            cpf
        })

        navigate('/clientes')
    }

    return (
    <div className={S.flexContainer}>
        <form className={S.formulario}>
            <label htmlFor="">Nome:</label>
            <input type="text" onChange={(e) => setNome(e.target.value)}/>

            <label htmlFor="">E-mail:</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="">Telefone:</label>
            <input type="text" onChange={(e) => setTelefone(e.target.value)}/>

            <label htmlFor="">CPF:</label>
            <input type="text" onChange={(e) => setCpf(e.target.value)}/>
        </form>

        <button onClick={EnviaCliente}>Enviar</button>
    </div>
  )
}
