import { useState } from 'react'
import AddTask from './AddTask'
import './App.css'
import Header from './Header'
import TaskList from './TaskList'

function App() {
  const [tasks,setTasks] = useState([])
  const onCreate = (name,title) => {
    const created = [
      ...tasks,{
        id: Math.round(Math.random()*9999999999999),
        name,
        title,
      }
    ]
    setTasks(created)
  }
  return (
    <>
    <Header/>
    <AddTask onCreate = {onCreate}/>
    <h1>Görevler</h1>
    <TaskList tasks={tasks}/>
    </>
  )
}

export default App
