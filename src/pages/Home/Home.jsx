import { Botao } from "../../components/Button/Button"
import { Header } from "../../components/Header/Header"
import homeImg from '../../images/home.svg'

import "./Home.css"

export function Home() {
    return (
        <div>
            <Header/>
            <main className="flex-container">
                <h2>Qual categoria você deseja gerenciar?</h2>
                <div className="content-container">
                    <img src={homeImg} alt="Exibição de dados em tela escura" />
                    <div className="button-container">
                        <Botao texto='Clientes' navegação={true} clique='/clientes' />
                        <Botao texto='Livros' navegação={true} clique='/livros' />
                    </div>
                </div>
                
            </main>
        </div>
        
    )
}