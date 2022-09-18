import { time } from "console";
import React from "react";

function List (){
    const tasks = [
        {
            task: "programar",
            time: "04:00:00"
        }
    ]
    return(
        <aside>
            <h2></h2>
            <ul>
                {tasks.map((item, index)=> (
                    <li key={index}>
                        <h3>
                            {item.task}
                        </h3>
                        <span>
                            {item.time}
                        </span>
                    </li>
                ))}
                
            </ul>
        </aside>
    )
}

export default List