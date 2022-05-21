import React from 'react'
import Task from './Task'
import ButtonDelete from './ButtonDelete'


const Tasks = ({tasks, deleteTask, toggleDone, setTasks}) => {
    const deleteAllTasks = () => {
        setTasks([])
    }
  return (
    <div>
         {tasks.map((task, index) =>
            <Task 
            task={task} 
            deleteTask = {deleteTask} 
            toggleDone = {toggleDone}
            key={task.id}
            index = {index+1}/>
        )}
        <ButtonDelete deleteAllTasks = {deleteAllTasks} />
    </div>
  )
}

export default Tasks