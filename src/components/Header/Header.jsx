import { Link } from "react-router-dom"
import logoLivrasilia from '../../assets/images/logo_livrasilia.png'
import '../../reset.css'
import S from './Header.module.css'

export const Header = () => {
    return(
        <header>
            <nav className={S.header}>
                <Link to='/'><img src={logoLivrasilia} alt='Logo Livrasilia'/></Link>
                <div className={S.headerDireita}>
                    <Link to='/clientes'>Clientes</Link>
                    <Link to='/livros'>Livros</Link>
                    <Link to='/informatica'>Informática</Link>
                </div>
            </nav>
        </header>
    )
}