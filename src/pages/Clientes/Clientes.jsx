import { RequisitaCliente } from "../../services/requisicao"
import { useEffect, useState } from "react"

export function Clientes() {
    const [clientes, setClientes] = useState([]);

    const getClientes = async () => {
        const { result } = await RequisitaCliente();
        const arrayFinal = [];
        result.forEach((item, index) => {
            arrayFinal.push({
                nome: item.nome,
                email: item.email,
                telefone: item.telefone,
                cpf: item.cpf
            })
        })
        setClientes(arrayFinal)
    }


    useEffect(()=>{
        getClientes()
    }, [])

    return (<div>
       <h1>Clientes</h1>
        <div>
            {clientes.map((item, index)=>{
            return <p key={index}>{item.nome}<br/>{item.telefone}<br/>{item.email}<br/>{item.cpf}</p>
        })}</div> 
    </div>
    
    )
}