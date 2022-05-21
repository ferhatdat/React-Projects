
import './App.css';
import Header from './components/Header';
import { useState } from "react";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    }
  ])

  const toggleShow = () => {
    setShowAddTask(!showAddTask)
  }

  const deleteTask = (deletedTaskId) => {
    setTasks(tasks.filter(item =>
      item.id !== deletedTaskId
    ))
  }
  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 100 + 1)
    const addNewTask = { id, ...newTask }
    setTasks([addNewTask, ...tasks])

  }

  const toggleDone = (toggleDoneId) => {
    setTasks(tasks.map(task => task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task))
  }

  return (
    <div className="container">
      <Header title='TASK TRACKER' showAddTask={showAddTask} toggleShow={toggleShow} />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length ? <Tasks
        tasks={tasks}
        setTasks = {setTasks}
        deleteTask={deleteTask}
        toggleDone={toggleDone} /> : <h2 style={{ textAlign: "center" }}>No Tasks To Show</h2>}
    </div>
  );
}

export default App;
