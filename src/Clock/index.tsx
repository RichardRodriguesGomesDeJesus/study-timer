import React from "react";
import style  from "./clock.module.scss";


interface Props {
    time: number |undefined,
}

export default function Clock({time = 0}: Props) {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minutesDozens,minutesUnits] = String(minutes).padStart(2, '0')
    const [secondsDozens,secondsUnits] = String(seconds).padStart(2, '0')
    return(
        <>
            <span className={style.clockNumber} >{minutesDozens}</span>
            <span className={style.clockNumber}>{minutesUnits}</span>
            <span className={style.clockDivision}>:</span>
            <span className={style.clockNumber}>{secondsDozens}</span>
            <span className={style.clockNumber}>{secondsUnits}</span>
        </>
    )
}