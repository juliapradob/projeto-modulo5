import { Link } from 'react-router-dom'
import S from './Tabela.module.css'

export const Tabela = (props) => {
    console.log(props.clientes)
    return (
        <table className = {S.tabela}>
        <thead>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>CPF</th>
            <th>Ações</th>
        </thead>
        {props.clientes.map(cliente => {
            return (
            <tr>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.cpf}</td>
                <td className={S.acoes}>
                <Link to = {`/edita-cliente/${cliente.id}`}>Editar</Link>
                <a onClick={(e) => {
                    e.preventDefault()
                    props.aoDeletar(cliente.id)
                }} href="#">Deletar</a>
                </td>
            </tr>
            )})}
        </table>
    )
    }
