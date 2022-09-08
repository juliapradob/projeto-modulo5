import { RequisitaCliente, DeletaCliente } from "../../services/requisicaoClientes"
import { useEffect, useState } from "react"
import { Header } from "../../components/Header/Header";
import { Loading } from "../../components/Loading/Loading";
import { Tabela } from "./Tabela/Tabela"
import { Botao } from "../../components/Button/Button";
import S from './HomeClientes.module.css';

export function HomeClientes() {
    const [clientes, setClientes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getClientes = () => {
        RequisitaCliente().then(({ data }) => {
            setClientes(data.result)
            setIsLoading(false)
        }).catch(error => {
            console.log('Error', error)
        })
    };

    useEffect(() => {
        getClientes()
    }, []);

    if(isLoading) {
        return <Loading/>
    }

    return (
        <div>
            <Header/>
            <div className={S.cadastroContainer}>
                <h1>Clientes</h1>
                <Botao texto="Adicionar cliente" navegação={true} clique="/cria-cliente" />
            </div>
            <Tabela 
                clientes={clientes} 
                aoDeletar={(id) => {
                    const confirmaDelecao = confirm('Você deseja deletar este usuário?')
                    if(confirmaDelecao) {
                        DeletaCliente(id).then(() => {
                            alert('Usuário deletado com sucesso')
                            getClientes()
                        }).catch(error => {
                            alert('Erro ao deletar usuário')
                            console.log(error)
                        })
                    }
                }}
            />
        </div>
    )
}