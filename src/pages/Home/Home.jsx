import { Botao } from "../../components/Button/Button"
import homeImg from '../../assets/images/home.svg'

import "./Home.css"


export function Home() {
    return (
    <main className="flex-container">
        <div className="text-limit">
                <h2>Qual categoria você deseja gerenciar?</h2>
        </div>
        
        <div className="img-container">
            <img src={homeImg} alt="Exibição de dados em tela escura " />
        </div>
        <div className="button-container">
            <Botao texto='Clientes' clique='/clientes' />
            <Botao texto='Livros' clique='/livros'/>
            <Botao texto='Informática' clique='/informatica'/>
        </div>
    </main>
    )
}