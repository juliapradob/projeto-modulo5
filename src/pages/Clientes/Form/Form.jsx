import { useEffect, useState } from "react"
import S from './Form.module.css'
import { useParams } from "react-router-dom";

export const Form = (props) => {

    const params = useParams()

    const [cliente, setCliente] = useState({
        nome: "",
        email: "",
        telefone: "",
        cpf: ""
    });

    useEffect(() => {
        if(props.temId) {
            setCliente(props.editarCliente)
        }
    }, [props.editarCliente])

    return (
        <form className={S.formulario}>
            {props.temId && <label>ID:</label>} 
            {props.temId && <input type='text' value={params.id} disabled></input>}
            
            <label htmlFor="nome">Nome:</label>
            <input
                value={cliente.nome} 
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
                value={cliente.email} 
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
                value={cliente.telefone} 
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
                value={cliente.cpf} 
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
            }}>{props.temId ? "Salvar" : "Cadastrar"}</button>
        </form>
    )
}