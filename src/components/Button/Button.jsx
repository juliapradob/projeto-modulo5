import S from './Button.module.css'
import './ButtonTeste.css'
import { useNavigate } from 'react-router-dom';


export const Botao = ({ nome, texto, clique }) => {
    const navigate = useNavigate()

    return(
        <button className={S[nome]} onClick={()=>navigate(clique)}>{texto}</button>
    )
}