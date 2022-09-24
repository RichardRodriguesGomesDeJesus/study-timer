import style from './info.module.scss'
export function Info() {
    return(
        <div className={style.info}>
            <h2 className={style.title}>Nosso cronômetro online tem diversos benefícios</h2>
            <p className={style.text} >Não se preocupe com a contagem do tempo durante aquela reunião,
                aumente a sua produtividade e foco nas suas tarefas diárias.</p>
        </div>       
    )
}