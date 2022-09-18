import React from "react";
import Botao from "../botao";

class Form extends React.Component {
    render(){
        return(
            <form>
                <div>
                    <label htmlFor="task">Adicione uma nova tarefa</label>
                    <input type="text" name="task" id="task" placeholder="O que você vai fazer?" required/>
                </div>
                <div><label htmlFor="time">tempo</label>
                <input step={1} type="time" name="time" id="time" min={"00:00:00"} max={"01:30:00"} required />
                </div>
                <Botao/>
            </form>
        )
    }
}

export default Form