import { useNavigate, useParams } from 'react-router-dom'
import { Form } from '../Form/Form'
import { EditaCliente } from '../../../services/requisicaoClientes'

export const EditaClientes = () => {
    const navigate = useNavigate()
    const params = useParams()

    return (
        <div>
            <h1>{params.id ? "Editar Usuário" : "Cadastrar Usuário"}</h1>
            <Form temId={params.id} aoTerminar={(cliente) => {
                EditaCliente(cliente).then(response => {
                    navigate('/clientes')
                }).catch(error => {
                    alert('Erro na edição do cliente')
                    console.log(cliente)
                })
            }}/>
        </div>
    )
}