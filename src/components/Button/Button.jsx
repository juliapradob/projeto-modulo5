import { useNavigate } from 'react-router-dom';


export const Botao = ({ nome, texto, clique, navegação }) => {
    const navigate = useNavigate()

    return(
        <button className={[nome]} onClick={navegação?()=>navigate(clique):clique}>{texto}</button>
    )
}