import React from 'react'
import {Botao} from '../Button/Button' 

export const Info = ({nome, email, telefone, cpf}) => {
  return (
    <div>
        <table>
          <tbody>
            <tr>
                <td>{nome}</td>
                <td>{email}</td>
                <td>{telefone}</td>
                <td>{cpf}</td>
            </tr> 
          </tbody>
        </table>

        <Botao texto = "Editar"></Botao>
        <Botao texto = "Deletar"></Botao>
    </div>
  )
}
