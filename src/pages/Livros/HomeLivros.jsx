import { RequisitaLivros, DeletaLivro } from "../../services/requisicaoLivros"
import { Header } from "../../components/Header/Header";
import { Botao } from "../../components/Button/Button";
import { Loading } from "../../components/Loading/Loading";
import { Tabela } from "./Tabela/Tabela"
import { useEffect, useState } from "react"

import S from './HomeLivros.module.css'

export function HomeLivros() {
    const [livros, setLivros] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getLivros = () => {
        RequisitaLivros().then(({ data }) => {
            setLivros(data.result)
            setIsLoading(false)
        }).catch(error => {
            console.log('Error', error)
        })
    };

    useEffect(() => {
        getLivros()
    }, []);

    if(isLoading) {
        return <Loading/>
    }

    return (
        <div>
            <Header/>
            <div className={S.cadastroContainer}>
                <h1>Livros</h1>
                <Botao texto="Adicionar livro" navegação={true} clique="/cria-livro" />
            </div>
            <Tabela 
                livros={livros} 
                aoDeletar={(id) => {
                    const confirmaDelecao = confirm('Você deseja deletar este livro?')
                    if(confirmaDelecao) {
                        DeletaLivro(id).then(() => {
                            alert('Livro deletado com sucesso')
                            getLivros()
                        }).catch(error => {
                            alert('Erro ao deletar livro')
                            console.log(error)
                        })
                    }
                }}
            />
        </div>
    )
}