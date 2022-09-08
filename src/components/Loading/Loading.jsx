import S from './Loading.module.css'

export const Loading = () => {
    return (
        <div className={S.spinContainer}><span className={S.spin}/></div>
    )
}