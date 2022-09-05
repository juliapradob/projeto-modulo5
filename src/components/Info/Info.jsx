import React from 'react'
import {Botao} from '../Button/Button' 
import S from './Info.module.css'

export const Info = ({nome, email, telefone, cpf}) => {
  return (
    <div className={S.card}>
        <table className={S.table}>
          <tbody className={S.tbody}>
            <tr className={S.informacoes}>
                <td>{nome}</td>
                <td>{email}</td>
                <td>{telefone}</td>
                <td>{cpf}</td>
            </tr> 
          </tbody>
        </table>

        <div className={S.botoes}>
          <Botao texto = "Editar"></Botao>
          <Botao texto = "Deletar"></Botao>
        </div>
    </div>
  )
}
