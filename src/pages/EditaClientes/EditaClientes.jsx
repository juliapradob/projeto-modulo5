import { useNavigate, useParams } from 'react-router-dom'
// import { Form } from '../../components/Form/Form'
// import { EditaCliente } from '../../services/users-service'

export const EditaClientes = () => {
    const navigate = useNavigate()
    const params = useParams()

    return (
        <div className={styles.classe}>
            <h1>{params.id ? "Editar Usuário" : "Cadastrar Usuário"}</h1>
            {/* <Form temCliente={params.id} onFinish={(cliente) => {
                EditaCliente(cliente).then(response => {
                    navigate('/clientes')
                }).catch(error => {
                    alert('Erro na edição do cliente')
                    console.log(cliente)
                })
            }}/> */}
        </div>
    )
}