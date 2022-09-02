import React from 'react'
import { Info } from '../Info/Info'
import S from './Tabela.module.css'

export const Tabela = ({itens}) => {
  return (
    <div className = {S.infoContainer}>
        {itens.map((item,index) => { 
           return <Info nome = {item.nome}></Info>
        })}
    </div>
  )
}
