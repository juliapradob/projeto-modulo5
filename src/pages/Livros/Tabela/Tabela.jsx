import { Link } from 'react-router-dom'
import S from './Tabela.module.css'

export const Tabela = (props) => {
  console.log(props.livros)
  return (
    <table className = {S.tabela}>
      <thead>
        <th>ID</th>
        <th>Título</th>
        <th>Autor</th>
        <th>Gênero</th>
        <th>Valor</th>
        <th>Ações</th>
      </thead>
      {props.livros.map(livro => {
        return (
          <tr>
            <td>{livro.id}</td>
            <td>{livro.titulo}</td>
            <td>{livro.autor}</td>
            <td>{livro.genero}</td>
            <td>{livro.valor}</td>
            <td className={S.acoes}>
              <Link to = {`/edita-livro/${livro.id}`}>Editar</Link>
              <a onClick={(e) => {
                e.preventDefault()
                props.aoDeletar(livro.id)
              }} href="#">Deletar</a>
            </td>
          </tr>
        )})}
    </table>
  )
}