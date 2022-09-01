import S from './Button.module.css'
import './ButtonTeste.css'

export const Botao = ({ nome, texto }) => {
    return(
        <button className={nome}>{texto}</button>
    )
}