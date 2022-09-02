import React from 'react'
import {Botao} from '../Button/Button' 

export const Info = ({nome}) => {
  return (
    <div><p>{nome}</p><Botao texto = "Editar"></Botao>
    <Botao texto = "Deletar"></Botao>
    </div>
  )
}
