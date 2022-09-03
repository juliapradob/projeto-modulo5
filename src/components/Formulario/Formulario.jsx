import S from './Formulario.module.css'

export const Formulario = ({texto1, texto2, texto3, texto4}) => {
    return(
        <form className={S.formulario}>
            <label htmlFor="">{texto1}</label>
            <input type="text" />

            <label htmlFor="">{texto2}</label>
            <input type="text" />

            <label htmlFor="">{texto3}</label>
            <input type="text" />

            <label htmlFor="">{texto4}</label>
            <input type="text" />
        </form>
    )
}