import { Link } from "react-router-dom"

import '../../reset.css'
import S from './Header.module.css'

export const Header = () => {
    return(
        <header>
            <nav className={S.header}>
                <Link to='/'><h1>LIVRASILIA</h1></Link>
                <div className={S.headerDireita}>
                    <Link to='/clientes'>Clientes</Link>
                    <Link to='/livros'>Livros</Link>
                    <Link to='/informatica'>Informática</Link>
                </div>
            </nav>
        </header>
    )
}