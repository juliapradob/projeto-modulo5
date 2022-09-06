import S from './Button.module.css'
import './ButtonTeste.css'
import { useNavigate } from 'react-router-dom';


export const Botao = ({ nome, texto, clique, navegação }) => {
    const navigate = useNavigate()

    return(
        <button className={S[nome]} onClick={navegação?()=>navigate(clique):clique}>{texto}</button>
    )
}