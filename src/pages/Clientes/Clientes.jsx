import { RequisitaCliente } from "../../services/requisicaoClientes"
import { useEffect, useState } from "react"
import { Info } from "../../components/Info/Info";
import { Tabela } from "../../components/Tabela/Tabela";

export function Clientes() {
    const [clientes, setClientes] = useState([]);

    const getClientes = async () => {
        const { result } = await RequisitaCliente();
        const arrayFinal = [];
        result.forEach((item, index) => {
            arrayFinal.push({
                id: item.id,
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
            <Tabela itens = {clientes}/>
           </div> 
    </div>
    
    )
}