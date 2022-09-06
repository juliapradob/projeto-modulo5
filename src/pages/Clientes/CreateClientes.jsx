import { useState } from "react"
import { CriaCliente } from "../../services/requisicaoClientes" 
import { useNavigate } from "react-router-dom"
import S from './CreateClientes.module.css'

export const CreateClientes = () => {
    const navigate = useNavigate()

    const [cliente, setCliente] = useState({
        nome:'',
        email:'',
        telefone:'',
        cpf:''
    })


    return (
    <div className={S.flexContainer}>
        <form className={S.formulario}>
            <label htmlFor="">Nome:</label>
            <input type="text" onChange={(e) => {setCliente({...cliente,
             nome:e.target.value
            })}}/>

            <label htmlFor="">E-mail:</label>
            <input type="text" onChange={(e) => {setCliente({...cliente,
             email:e.target.value
            })}}/>

            <label htmlFor="">Telefone:</label>
            <input type="text" onChange={(e) => {setCliente({...cliente,
             telefone:e.target.value
            })}}/>

            <label htmlFor="">CPF:</label>
            <input type="text" onChange={(e) => {setCliente({...cliente,
             cpf:e.target.value
            })}}/>
        </form>

        <button onClick={(e)=>{
            e.preventDefault()
            CriaCliente(cliente).then(response=>{
                navigate('/clientes')
            }).catch(error => {
                alert('Erro na criação do cliente')
                console.log(cliente)
            })
        }}>Enviar</button>
    </div>
  )
}
