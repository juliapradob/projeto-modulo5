import { Botao } from "../../components/Button/Button"
import "./Home.css"


export function Home() {
    return (
    <main className="flex-container">
        <div className="text-limit">
                <h2>Qual categoria você deseja gerenciar?</h2>
        </div>
        <div className="img-container">
            
            <img src="https://static.preparaenem.com/2021/10/livros.jpg" alt="Livros Organizados em Estante" />
        </div>
        <div className="button-container">
            <Botao texto='Clientes' clique='/clientes' />
            <Botao texto='Livros' clique='/livros' />
            <Botao texto='Informática' clique='/informatica' />
        </div>
    </main>
    )
}