import { useEffect, useState } from "react"
import S from './Form.module.css'
import { useParams } from "react-router-dom";

export const Form = (props) => {

    const params = useParams()

    const [livro, setLivro] = useState({
        titulo: "",
        autor: "",
        genero: "",
        valor: ""
    });

    useEffect(() => {
        if(props.temId) {
            setLivro(props.editarLivro)
        }
    }, [props.editarLivro])

    return (
        <form className={S.formulario}>
            {props.temId && <label>ID:</label>} 
            {props.temId && <input type='text' value={params.id} disabled></input>}
            
            <label htmlFor="titulo">Título:</label>
            <input
                value={livro.titulo} 
                type="text" 
                placeholder="Insira o título aqui"
                onChange={(e) => {
                    setLivro({
                        ...livro,
                        titulo: e.target.value
                    })
                }} />

            <label htmlFor="autor">Autor:</label>
            <input 
                value={livro.autor} 
                type="text" 
                placeholder="Insira o autor aqui"
                onChange={(e) => {
                    setLivro({
                        ...livro,
                        autor: e.target.value
                    })
                }} />

            <label htmlFor="genero">Gênero:</label>
            <input
                value={livro.genero} 
                type="text"
                placeholder="Insira o gênero aqui"
                onChange={(e) => {
                    setLivro({
                        ...livro,
                        genero: e.target.value
                    })
                }} />

            <label htmlFor="valor">Valor:</label>
            <input 
                value={livro.valor} 
                type="text"
                placeholder="Insira o valor aqui"
                onChange={(e) => {
                    setLivro({
                        ...livro,
                        valor: e.target.value
                    })
                }}/>
                
            <button onClick={(e) => {
                e.preventDefault()
                props.aoTerminar(livro)
            }}>{props.temId ? "Salvar" : "Cadastrar"}</button>
        </form>
    )
}
