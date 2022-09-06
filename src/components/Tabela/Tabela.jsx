import React from 'react'
import { Info } from '../Info/Info'
import S from './Tabela.module.css'

export const Tabela = (props) => {
  return (
    <table className = {S.infoContainer}>
      <thead>
        <th>ID</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Telefone</th>
        <th>CPF</th>
        <th>Ações</th>
      </thead>
      {props.clientes.map(cliente=>{
        return (
          <tr>
            <td>{cliente.id}</td>
            <td>{cliente.nome}</td>
            <td>{cliente.email}</td>
            <td>{cliente.telefone}</td>
            <td>{cliente.cpf}</td>
            <td>
              <Link to = {`/edita-cliente/${cliente.id}`}>Editar</Link>
              <br/>-<br/>
              <a onClick={(e) =>{
                e.preventDefault()
                props.deletar(cliente.id)
              }} href="#">Deletar</a>
            </td>
          </tr>
        )})}
    </table>
  )
}
        <div className={S.botoes}>
          <Botao texto = "Editar" navegação={false} clique={()=>{
            console.log(id)
          }}/>
          <Botao texto = "Deletar" navegação={false} clique={()=>{
            const confirmaDelecao = confirm('Você deseja deletar este usuário?')
            if(confirmaDelecao) {
              DeletaCliente(id).then(()=>{
                alert('Usuário deletado com sucesso')
                navigate('/clientes')
              }).catch(error=>{
                alert('Erro ao deletar usuário')
                console.log(error)
              })
            }
          }}/>
        </div>