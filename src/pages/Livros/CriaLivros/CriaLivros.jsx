import { useState } from "react"
import axios from 'axios'

export const CreateLivros = () => {
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [genero, setGenero] = useState('')
    const [valor, setValor] = useState('')

    const EnviaLivro = () => {
        axios.post(`https://api-livrasilia.herokuapp.com/livros`, {
            titulo,
            autor,
            genero,
            valor
        })
    }

    return (
    <div>
        <form>
            <label htmlFor="">Título:</label>
            <input type="text" onChange={(e) => setTitulo(e.target.value)}/>

            <label htmlFor="">Autor:</label>
            <input type="text" onChange={(e) => setAutor(e.target.value)}/>

            <label htmlFor="">Gênero:</label>
            <input type="text" onChange={(e) => setGenero(e.target.value)}/>

            <label htmlFor="">Valor:</label>
            <input type="text" onChange={(e) => setValor(e.target.value)}/>
        </form>

        <button onClick={EnviaLivro}>Enviar</button>
    </div>
  )
}
