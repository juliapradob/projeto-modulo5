import { Link } from "react-router-dom"
import logoLivrasilia from '../../assets/images/logo_livrasilia.png'
import '../../reset.css'
import S from './Header.module.css'

export const Header = () => {
    return(
        <header>
            <nav className={S.header}>
                <Link to='/home'><img src={logoLivrasilia} alt='Logo Livrasilia'/></Link>
                <div className={S.headerDireita}>
                    <Link to='/clientes'>Clientes</Link>
                    <Link to='/livros'>Livros</Link>
                </div>
            </nav>
        </header>
    )
}