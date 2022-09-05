import React from 'react'
import { Info } from '../Info/Info'
import S from './Tabela.module.css'

export const Tabela = ({itens}) => {
  return (
    <div className = {S.infoContainer}>
      <div className={S.legenda}>
        <p>Nome</p>
        <p>Email</p>
        <p>Telefone</p>
        <p>CPF</p>
      </div>
        {itens.map((item,index) => { 
           return <Info key={index} nome = {item.nome} telefone = {item.telefone} cpf = {item.cpf} email = {item.email}></Info>
        })}
    </div>
  )
}
