import { Itask } from '../../../types/task.'
import style from '../list.module.scss'


interface props extends Itask {
    selectedTask: (selectedTask: Itask) => void
}

export default function Item({task, time,selected,completed,id, selectedTask  }:props) {
    return(
        <li 
        onClick={() => !completed && selectedTask({
            task,
            time,
            selected,
            completed,
            id            
        })}
        className={`${style.item} ${selected ? style.selectedItem : ''} ${completed ? style.completedItem : ''}`}>
                        <h3>
                            {task}
                        </h3>
                        <span>
                            {time}
                        </span>
                        {completed && <span className={style.concluded} aria-label="completed task"></span>}
                    </li>
    )
}