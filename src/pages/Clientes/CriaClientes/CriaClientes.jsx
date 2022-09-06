import { useNavigate, useParams } from 'react-router-dom'
import { Form } from '../Form/Form'
import { CriaCliente } from '../../../services/requisicaoClientes'
import S from './CriaClientes.module.css'

export const CriaClientes = () => {
    const navigate = useNavigate()
    const params = useParams()

    return (
        <div className={S.formulario}>
            <h1>{params.id ? "Editar Usuário" : "Cadastrar Usuário"}</h1>
            <Form temId={params.id} aoTerminar={(cliente) => {
                CriaCliente(cliente).then(response => {
                    navigate('/clientes')
                }).catch(error => {
                    alert('Erro na criação do cliente')
                })
            }}/>
        </div>
    )
}