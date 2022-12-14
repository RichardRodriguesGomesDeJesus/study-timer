import React, { useState } from 'react';
import Form from '../Components/Form';
import List from '../Components/List';
import { NightMode } from '../Components/NightMode';
import { StopWatch } from '../Components/StopWatch';
import Timer from '../Components/Timer';
import { Itask } from '../types/task.';
import style from './App.module.scss'

function App() {
  const [tasks,setTasks] = useState<Itask[]> ([])

  const [selected, setSelected ] = useState<Itask>()

  function selectedTask(selectedTask: Itask) {
    setSelected(selectedTask)
    setTasks(previousTasks => previousTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true  : false
    })))
  }
  function finishTask() {
    if (selected) {
      setSelected(undefined)
      setTasks(previousTasks => previousTasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task
      }))
    }
  }
  return (
    <div className={style.AppStyle}>
      <NightMode onClick={()=>{
        document.body.classList.toggle("DarkMode")
      }} />
      <Form setTasks={setTasks} />
      <List
      selectedTask={selectedTask}
      tasks={tasks} />
      <Timer finishTask={finishTask} selected={selected} />
      <StopWatch/>
    </div>
  );
}

export default App;
