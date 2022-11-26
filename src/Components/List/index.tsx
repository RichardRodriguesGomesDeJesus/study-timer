import { Itask } from "../../types/task.";
import Item from "./Item";
import style from './list.module.scss';

interface props {
    tasks:Itask[],
    selectedTask: (selectedTask: Itask) => void
}

function List ({tasks,selectedTask} : props){
     
    return(
        <aside className={style.taskList}>
            <h2>Lista de tarefas</h2>
            <ul>
                {tasks.map((item)=> (
                    <Item 
                    selectedTask={selectedTask}
                    {...item} 
                    key={item.id} />
                ))}
                
            </ul>
        </aside>
    )
}

export default List