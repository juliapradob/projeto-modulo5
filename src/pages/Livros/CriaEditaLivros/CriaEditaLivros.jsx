import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../../../components/Header/Header'
import { Form } from '../Form/Form'
import { CriaLivro, EditaLivro, RequisitaLivroPorId } from '../../../services/requisicaoLivros'
import { useEffect, useState } from 'react'

import S from './CriaEditaLivros.module.css'

export const CriaEditaLivros = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [editarLivro, setEditarLivro] = useState({})

    useEffect(() => {
        if (params.id) {
            RequisitaLivroPorId(params.id).then(({ data }) => {
                setEditarLivro(data)
            }).catch(error => {
                alert("Erro ao obter livro")
            })
        }
    }, [])

    return (
        <div className={S.formulario}>
            <Header/>
            <h1>{params.id ? "Editar livro" : "Cadastrar livro"}</h1>
            <Form temId={params.id} editarLivro={editarLivro} aoTerminar={(livro) => {
                if(params.id) {
                    console.log(livro)
                    EditaLivro(params.id, {titulo: livro.titulo, autor: livro.autor, genero: livro.genero, valor: livro.valor}).then(response => {
                        navigate('/livros')
                    }).catch(error => {
                        alert('Erro na edição do livro')
                    })
                } else {
                    CriaLivro(livro).then(response => {
                        navigate('/livros')
                    }).catch(error => {
                        alert('Erro na criação do livro')
                    })
                }
            }}/>
        </div>
    )
}