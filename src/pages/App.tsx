import React, { useState } from 'react';
import { Banner } from '../components/Banner';
import Form from '../components/Form';
import { Info } from '../components/Info';
import List from '../components/List';
import Timer from '../components/Timer';
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
      <Banner/>
      <Info/>
      <Form setTasks={setTasks} />
      <List
      selectedTask={selectedTask}
      tasks={tasks} />
      <Timer finishTask={finishTask} selected={selected} />
    </div>
  );
}

export default App;
