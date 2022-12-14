import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Header } from '../../../components/Header/Header'
import { Form } from '../Form/Form'
import { CriaCliente, EditaCliente, RequisitaClientePorId } from '../../../services/requisicaoClientes'
import S from './CriaEditaClientes.module.css'

export const CriaEditaClientes = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [editarCliente, setEditarCliente] = useState({})

    useEffect(() => {
        if (params.id) {
            RequisitaClientePorId(params.id).then(({ data }) => {
                setEditarCliente(data)
            }).catch(error => {
                alert("Erro ao obter usuário")
            })
        }
    }, [])

    return (
        <div>
            <Header/>
            <div className={S.formulario}>
                <h1>{params.id ? "Editar usuário" : "Cadastrar usuário"}</h1>
                <Form temId={params.id} editarCliente={editarCliente} aoTerminar={(cliente) => {
                    if(params.id) {
                        console.log(cliente)
                        EditaCliente(params.id, {nome: cliente.nome, email: cliente.email, telefone: cliente.telefone, cpf: cliente.cpf}).then(response => {
                            navigate('/clientes')
                        }).catch(error => {
                            alert('Erro na edição do cliente')
                        })
                    } else {
                        CriaCliente(cliente).then(response => {
                            navigate('/clientes')
                        }).catch(error => {
                            alert('Erro na criação do cliente')
                        })
                    }
                }}/>
            </div>
        </div>
        
    )
}