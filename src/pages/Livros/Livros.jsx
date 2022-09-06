import { RequisitaLivros } from "../../services/requisicaoLivros"
import { Botao } from "../../components/Button/Button";
import { useEffect, useState } from "react"

export function Livros() {
    const [livros, setLivros] = useState([]);

    const getLivros = async () => {
        const { result } = await RequisitaLivros();
        const arrayFinal = [];
        result.forEach((item) => {
            arrayFinal.push({
                id: item.id,
                titulo: item.titulo,
                autor: item.autor,
                genero: item.genero,
                valor: item.valor
            })
        })
        setLivros(arrayFinal)
    }


    useEffect(()=>{
        getLivros()
    }, [])

    return (<div>
       <h1>Livros</h1>
        <div>
            <Botao texto="Adicionar livro" navegação={true} clique="/add-livro" />

            {livros.map((item, index)=>{
            return <p key={index}>{item.id}<br/>{item.titulo}<br/>{item.autor}<br/>{item.genero}<br/>{item.valor}</p>
        })}</div> 
    </div>
    
    )
}