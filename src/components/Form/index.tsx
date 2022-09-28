import React, { useState } from "react";
import { Itask } from "../../types/task.";
import Button from "../Button";
import style  from'./form.module.scss';
import { v4 as uuidv4 } from 'uuid'; 

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<Itask[]>>
    
}

function Form({setTasks}: Props) {
    const [task , setTask] = useState('')
    const [time , setTime] = useState('00:00')
    function addTask(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        setTasks(oldTasks=>[
            ...oldTasks,
            {
                task,
                time,
                selected: false,
                completed: false,
                id: uuidv4()
            }
        ]
        )
        setTask('')
        setTime('00:00')

    }
    return(
        <form className={style.newTask} onSubmit={addTask} >
        <div className={style.inputContainer}>
            <label htmlFor="task">Adicione uma nova tarefa</label>
            <input 
            type="text" 
            name="task"
            value={task} 
            onChange={ event =>setTask(event.target.value)}
            id="task" 
            placeholder="O que você vai fazer?" 
            required/>
        </div>
        <div className={style.inputContainer}>
            <label htmlFor="time">tempo</label>
            <input 
            step={1} 
            type="time" 
            name="time" 
            value={time}
            onChange={ event => setTime(event.target.value)}
            id="time" 
            min={"00:00:00"} 
            max={"10:00:00"}
            required />
        </div>
        <Button type="submit" >Adicionar</Button>
    </form>
    )
}

export default Form