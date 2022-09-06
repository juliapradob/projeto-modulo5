import { RequisitaCliente } from "../../services/requisicaoClientes"
import { useEffect, useState } from "react"
import { Info } from "../../components/Info/Info";
import { Tabela } from "../../components/Tabela/Tabela";
import { Botao } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import S from './Clientes.module.css';

export function Clientes() {
    const [clientes, setClientes] = useState([]);

    const getClientes = () => {
        RequisitaCliente().then(({data})=>{
            setClientes(data)
        }).catch(error => {
            console.log('Error', error)
        })
    }

    useEffect(()=>{
        getClientes()
    }, [])

    return (
    <div>
        <div className={S.cadastroContainer}>
            <h1>Clientes</h1>
            <Botao texto="Adicionar cliente" navegação={true} clique="/add-cliente" />
        </div>
        <div>
            <Tabela 
                itens = {clientes} 
                deletar={(id)=>{
                    const confirmaDelecao = confirm('Você deseja deletar este usuário?')
                    if(confirmaDelecao) {
                        DeletaCliente(id).then(()=>{
                            alert('Usuário deletado com sucesso')
                            navigate('/clientes')
                        }).catch(error=>{
                            alert('Erro ao deletar usuário')
                            console.log(error)
                        })
                    }
                }
            }/>
        </div> 
    </div>
    )
}