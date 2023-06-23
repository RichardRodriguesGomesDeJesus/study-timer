import React from "react";
import Style from './StopWatch.module.scss'
import { useEffect, useState } from "react"
import Button from "../Button"
import Clock from "../Clock";


export function StopWatch() {
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(true);
    const [time , setTime] = useState(0)
    
    
    useEffect(() => {
        let intervalId: string | number | NodeJS.Timeout | undefined 
      
        if (isActive && isPaused === false) {
          intervalId = setInterval(() => {
            setTime((time) => time + 1);
          }, 1000);
        } else {
          clearInterval(intervalId);
        }
        return () => {
          clearInterval(intervalId);
        };
      }, [isActive, isPaused]);
    return(
        <div className={Style.StopWatch}>
            <p className={Style.title}>Click no botão para iniciar o cronometro</p>
            <div className={Style.timerWrapper}>
                <Clock time={time} />
            </div>
            <Button onClick={()=>{
                setIsActive(true);
                setIsPaused(false);
            }} >Começar</Button>
            <Button onClick={()=>{
                setIsPaused(!isPaused);
            }} >Pausar</Button>
            <Button onClick={()=>{
                setIsActive(false);
                setTime(0);
            }} >Reset</Button>
        </div>
    )
}
