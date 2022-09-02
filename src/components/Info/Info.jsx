import React from 'react'
import {Botao} from '../Button/Button' 

export const Info = ({nome, email, telefone, cpf}) => {
  return (
    <div>
        <table>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>CPF</th>
            </tr>

            <tr>
                <td>{nome}</td>
                <td>{email}</td>
                <td>{telefone}</td>
                <td>{cpf}</td>
            </tr> 
            
           <tr>
                <Botao texto = "Editar"></Botao>
                <Botao texto = "Deletar"></Botao>
            
            </tr> 
        </table>
    </div>
  )
}
