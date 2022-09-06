import { useState } from "react"
import S from './Form.module.css'

export const Form = (props) => {

    const [cliente, setCliente] = useState({
        nome: "",
        email: "",
        telefone: "",
        cpf: ""
    });

    return (
        <form className={S.formulario}>
            <label htmlFor="nome">Nome:</label>
            <input 
                type="text" 
                placeholder="Insira o nome aqui"
                onChange={(e) => {
                    setCliente({
                        ...cliente,
                        nome: e.target.value
                    })
                }} />

            <label htmlFor="email">E-mail:</label>
            <input 
                type="text" 
                placeholder="Insira o e-mail aqui"
                onChange={(e) => {
                    setCliente({
                        ...cliente,
                        email: e.target.value
                    })
                }} />

            <label htmlFor="telefone">Telefone:</label>
            <input
                type="text"
                placeholder="Insira o telefone aqui"
                onChange={(e) => {
                    setCliente({
                        ...cliente,
                        telefone: e.target.value
                    })
                }} />

            <label htmlFor="cpf">CPF:</label>
            <input 
                type="text"
                placeholder="Insira o CPF aqui"
                onChange={(e) => {
                    setCliente({
                        ...cliente,
                        cpf: e.target.value
                    })
                }}/>
                
            <button onClick={(e) => {
                e.preventDefault()
                props.aoTerminar(cliente)
            }}>{props.temId ? "Editar" : "Cadastrar"}</button>
        </form>
    )
}
