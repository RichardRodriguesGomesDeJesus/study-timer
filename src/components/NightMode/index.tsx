import Style from './NightMode.module.scss'
interface Props {
    onClick?: ()=> void,
}
export function NightMode( {onClick} :Props) {
    return(
        <>
        <input type="button" value=""  id={Style.btn}/>
        <label htmlFor="btn" onClick={onClick} className={Style.NightMode}></label>
        </>
    )
}