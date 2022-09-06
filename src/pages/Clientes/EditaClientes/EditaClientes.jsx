import { useNavigate, useParams } from 'react-router-dom'
import { Form } from '../Form/Form'
import { EditaCliente } from '../../../services/requisicaoClientes'
import S from './EditaClientes.module.css'

export const EditaClientes = () => {
    const navigate = useNavigate()
    const params = useParams()

    return (
        <div className={S.formulario}>
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