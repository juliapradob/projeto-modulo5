// import React from 'react'
// import {Botao} from '../Button/Button' 
// import S from './Info.module.css'
// import { DeletaCliente } from '../../services/requisicaoClientes'
// import { useNavigate } from 'react-router-dom'

// export const Info = ({id, nome, email, telefone, cpf}) => {
//   const navigate = useNavigate()

//   return (
//     <div className={S.card}>
//         <table className={S.table}>
//           <tbody className={S.tbody}>
//             <tr className={S.informacoes}>
//                 <td>{nome}</td>
//                 <td>{email}</td>
//                 <td>{telefone}</td>
//                 <td>{cpf}</td>
//             </tr> 
//           </tbody>
//         </table>

//         <div className={S.botoes}>
//           <Botao texto = "Editar" navegação={false} clique={()=>{
//             console.log(id)
//           }}/>
//           <Botao texto = "Deletar" navegação={false} clique={()=>{
//             const confirmaDelecao = confirm('Você deseja deletar este usuário?')
//             if(confirmaDelecao) {
//               DeletaCliente(id).then(()=>{
//                 alert('Usuário deletado com sucesso')
//                 navigate('/clientes')
//               }).catch(error=>{
//                 alert('Erro ao deletar usuário')
//                 console.log(error)
//               })
//             }
//           }}/>
//         </div>
//     </div>
//   )
// }
