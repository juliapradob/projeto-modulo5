import { useNavigate, useParams } from 'react-router-dom'
import { Form } from '../Form/Form'
import { CriaCliente } from '../../../services/requisicaoClientes'

export const CriaClientes = () => {
    const navigate = useNavigate()
    const params = useParams()

    return (
        <div>
        <h1>{params.id ? "Editar Usuário" : "Cadastrar Usuário"}</h1>
        <div>
            <Form temId={params.id} aoTerminar={(cliente) => {
                CriaCliente(cliente).then(response => {
                    navigate('/clientes')
                }).catch(error => {
                    alert('Erro na criação do cliente')
                    console.log(cliente)
                })
            }}/>
        </div>
        </div>
    )
}