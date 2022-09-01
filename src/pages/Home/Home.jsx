import { Botao } from "../../components/Button/Button"
import "./Home.css"

export function Home() {
    return (
    <main className="flex-container">
        <div className="img-container">
            <div className="text-limit">
                <h2>Qual categoria você deseja gerenciar?</h2>
            </div>
            <img src="https://static.preparaenem.com/2021/10/livros.jpg" alt="Livros Organizados em Estante" />
        </div>
        <div className="button-container">
            <Botao texto='Clientes'/>
            <Botao texto='Livros'/>
            <Botao texto='Informática'/>
        </div>
    </main>
    )
}