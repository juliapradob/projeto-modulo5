import { RequisitaCliente } from "../../services/requisicaoClientes"
import { useEffect, useState } from "react"
import { Info } from "../../components/Info/Info";
import { Tabela } from "../../components/Tabela/Tabela";
import { Botao } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import S from './Clientes.module.css';

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

    return (
    <div>
        <div className={S.cadastroContainer}>
            <h1>Clientes</h1>
            <Botao texto="Adicionar cliente" clique="/add-cliente" />
        </div>
        <div>
            <Tabela itens = {clientes}/>
        </div> 
    </div>
    )
}