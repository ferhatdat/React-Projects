import React, {useState, useEffect} from 'react'
import { FaTimes } from "react-icons/fa"

const Task = ({task, deleteTask, toggleDone , index}) => {
 
  return (
    <div className={task.isDone ? 'task done' : 'task'} onDoubleClick={()=>toggleDone(task.id)}>
        <h3>{index} - {task.text} <FaTimes onClick={() => deleteTask(task.id)} style={{color:"red", cursor:"pointer"}}/></h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task